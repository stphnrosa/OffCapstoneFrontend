import { useState, useEffect} from 'react'
import { getBlogs } from '../../utilities/Blogs-api';
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogForm'
import CreateBlogList from '../../components/CreateBlogList/CreateBlogList'

export default function Homepage() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    getBlogs().then(data => setBlogs(data));
  }, []) // SECOND ARGUMENT IS AN EMPTY DEPENDENCY ARRAY AS WE ONLY WANT THE USE EFFECT TO BE USED ONCE.

  return (
    <div>
      <CreateBlogForm />
      <CreateBlogList blogs={blogs}/>
    </div>
  )
}
