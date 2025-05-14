import CreateBlogListItem from "../BlogListItem/BlogListItem";

export default function CreateBlogList({ blogs }) {
  return (
  <div>
    {blogs && blogs.map(blog => {
        return <CreateBlogListItem key = {blog._id} blog = {blog} />
    })}
    </div>
);
}
