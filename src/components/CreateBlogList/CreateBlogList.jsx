import { useState } from "react";
import CreateBlogListItem from "../BlogListItem/BlogListItem";

export default function CreateBlogList({ blogs, setBlogs }) {
  function handleDeleteBlog(deletedId) {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== deletedId));
  }

  return (
    <div>
      {blogs &&
        blogs.map((blog) => {
          return (
            <CreateBlogListItem
              key={blog._id}
              blog={blog}
              onDelete={handleDeleteBlog}
            />
          );
        })}
    </div>
  );
}
