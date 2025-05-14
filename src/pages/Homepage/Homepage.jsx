import { useState, useEffect} from 'react'
import CreateBlogForm from '../../components/CreateBlogForm/CreateBlogForm'
import CreateBlogList from '../../components/CreateBlogList/CreateBlogList'

export default function Homepage() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function getBlogs(){
      try{
        const response = await fetch ('http://localhost:3000/blogs');
        const data = await response.json();
      }catch (error) {
        console.error(error);
      }
    }
    getBlogs();
  }, []) // SECOND ARGUMENT IS AN EMPTY DEPENDENCY ARRAY AS WE ONLY WANT THE USEEFFECT TO BE USED ONCE.

  return (
    <div>
      <CreateBlogForm />
      <CreateBlogList />
    </div>
  )
}
