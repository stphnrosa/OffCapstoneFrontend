import CommentListItem  from "../CommentListItem/CommentListItem";

export default function CommentList({ comments, setComments }) {
  function handleDelete(commentId) {
    setComments(prev => prev.filter(comment => comment._id !== commentId))
  }
  
    return (
    <div>
        {comments.map(comment =>(
       < CommentListItem
       key={comment._id}
       comment ={comment}
       onDelete={handleDelete} />
    ))}
</div>

    );
}
