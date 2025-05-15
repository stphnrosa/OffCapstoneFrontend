import { useState, useEffect } from "react";
// import BlogEditpage from "../../pages/BlogEditpage/BlogEditpage";
import { Link } from "react-router-dom";

export default function BlogListItem({ blog, onDelete }) {
  async function handleDelete() {
    const confirmed = window.confirm("You sure about that?");
    if (!confirmed) return;

    try {
      const res = await fetch(`http://localhost:3000/blogs/${blog._id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        onDelete(blog._id);
      } else {
        console.error("Failed to delete this blog");
      }
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  }
  return (
    <div
      className="blog-item"
      style={{ border: "2px solid black", padding: "1rem" }}
    >
      <h2>{blog.title} </h2>
      <p>{blog.body} </p>

      <button
        onClick={handleDelete}
        style={{ background: "red", color: "white" }}
      >
        Delete Blog
      </button>

      <Link to={`/blogs/${blog._id}/edit`}>
        <button
          style={{
            background: "linear-gradient(90deg, #5de0e6, #004aad",
            color: "white",
          }}
        >
          {" "}
          Edit Blog
        </button>
      </Link>

      <Link to={`/blogs/${blog._id}`}>
        <button
          style={{
            background: "linear-gradient(90deg, #5de0e6, #004aad",
            color: "white",
          }}
        >
          {" "}
          Read more
        </button>
      </Link>
    </div>
  );
}













//  {/* <h3>Comments:</h3>
//   <CommentList comments={comments} setComments={setComments} />
//   < CreateCommentForm blogId={blog._id} setComments={setComments} /> */}

// import CommentList from "../CreateCommentList/CommentList"
// import CreateCommentForm from "../CreateCommentForm/CreateCommentForm"

// / const [comments, setComments] = useState([]);

// useEffect(() => {
//   async function fetchComments() {
//     try {
//       const res = await fetch (`http://localhost:3000/comments?blogId=${blog._id}`)
//       const data = await res.json();
//       setComments(data);
//     } catch (err) {
//       console.error('Error fetching comments', err);
//     }
//   }
// fetchComments();
// }, [blog._id]);
