
import { useState, useEffect} from 'react'
import { getBlogs } from '../../utilities/Blogs-api';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogForm'
import CreateBlogList from '../../components/CreateBlogList/CreateBlogList'


export default function Blogpage() {
  const [blogs, setBlogs] = useState(null);
  

  useEffect(() => {
    getBlogs().then(data => setBlogs(data));
  }, []) // SECOND ARGUMENT IS AN EMPTY DEPENDENCY ARRAY AS WE ONLY WANT THE USE EFFECT TO BE USED ONCE.

  return (
    <div
    style={{
      textAlign: "center",
      border: "5px solid",
      padding: "10px",
    }}>
      <CreateBlogForm setBlogs={setBlogs} />
      <CreateBlogList blogs={blogs} />
    </div>
  )
}
