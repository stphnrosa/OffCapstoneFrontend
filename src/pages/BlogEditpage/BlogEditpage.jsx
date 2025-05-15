import React, {useState, useEffect} from'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function BlogEditpage() {
    const {id} = useParams();
  const navigate = useNavigate(); 
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  useEffect(() => {
    async function fetchBlog(){
        try {
            const res= await fetch(`http://localhost:3000/blogs${id}`)
            const blog= await res.json();
            setTitle(blog.title)
            setContent(blog.content)

        } catch (error) {
            console.error('Error fetching blog:', error)
        }
    }
    fetchBlog()
  }, [id])

  async function handleUpdate(e) {
    e.preventDefault();
    try{
        const res = await fetch(`http://localhost:3000/blogs/${id}`,{
        method:"PUT",
        headers:{ 'Content-Type': 'application/json'},
        body: JSON.stringify({ title, content }),
        })
        if (res.ok) {
            navigate('/Blog')
        } else {
            console.error('Update Failed')
        }
    } catch (error) {
        console.error('Error updating blog', error)
    }
  }
    return (
    <div>
        <h1>Edit Post</h1>
        <form  onSubmit={handleUpdate}>
        <input
        type="text"
        placeholder="Title"
        value= {title}
        onChange={(e) => setTitle(e.target.value)}
        required/>
        <textarea
         placeholder="Content"
         value={content}
         onChange={(e => setContent(e.target.value))}
         required />
         <button type="submit">Update</button>
        </form>
        </div>
  )
}
