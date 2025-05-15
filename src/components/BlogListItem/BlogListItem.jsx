import { useState, useEffect } from "react"
import CommentList from "../CreateCommentList/CommentList"
import CreateCommentForm from "../CreateCommentForm/CreateCommentForm"

export default function BlogListItem({ blog, }) {
const [comments, setComments] = useState([]);

useEffect(() => {
  async function fetchComments() {
    try {
      const res = await fetch (`http://localhost:3000/comments?blogId=${blog._id}`)
      const data = await res.json();
      setComments(data);
    } catch (err) {
      console.error('Error fetching comments', err);
    }
  }
fetchComments(); 
}, [blog._id]); 

async function handleDelete() {
  const confirmed= window.confirm("you sure about that?");
  if (!confirmed) return;
  try {
    const res = await fetch(`http://localhost:3000/blogs/${blog._id}`, {
      method: 'DELETE',
    })
    if (res.ok){
      onDelete(blog._id)
    } else {
      console.error('Failed to delete this blog')
    }
  } catch (error) {
    console.error('Error deleting blog', error)
  }
}
  return (
    <div className="blog-item" style={{ border:'2px solid black' }}>
    <h2>{blog.title} </h2>
    <p>{blog.body} </p>

<button onClick={handleDelete} style= {{ background:'red', color: 'white'}}>Delete Blog</button>

    <h3>Comments:</h3>
    <CommentList comments={comments} setComments={setComments} /> 
    < CreateCommentForm blogId={blog._id} setComments={setComments} />
    </div>
  )
}
