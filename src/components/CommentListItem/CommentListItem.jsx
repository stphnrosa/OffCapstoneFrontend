
export default function CommentListItem({ comment, onDelete }) {
 async function handleDelete() {
    const confirmDelete= window.confirm("Delete this comment?");
    if (!confirmDelete) return;
 
try {
    const response = await fetch (`http:// localhost:3000/comments/${comment._id}`, {
        method:'DELETE',
    })
    if (response.ok) {
        onDelete(comment._id);
    } else {
console.error("Failed to delete comment");
    }
} catch (error) {
    console.error("Error deleting comment:", error)
}
}

  return (
    <div>
   <p> {comment.body}</p>
   <button onClick={handleDelete}>Delete</button>
   </div>
  )
}
