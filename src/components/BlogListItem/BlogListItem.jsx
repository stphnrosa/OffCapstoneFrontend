
export default function BlogListItem({ blog }) {
  return (
    <div>
        <h2>{blog.title} </h2>
        <p>{blog.body}</p>
    </div>
  )
}
