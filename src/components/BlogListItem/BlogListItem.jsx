import { useState, useEffect } from "react"
import CommentList from "../CreateCommentList/CommentList"
import CreateCommentForm from "../CreateCommentForm/CreateCommentForm"

export default function BlogListItem({ blog }) {
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


  return (
    <div className="blog-item" style={{ border:'2px solid black' }}>
    <h2>{blog.title} </h2>
    <p>{blog.body} </p>

    <h3>Comments:</h3>
    <CommentList comments={comments} setComments={setComments} />

    < CreateCommentForm blogId={blog._id} setComments={setComments} />
    </div>
  )
}
