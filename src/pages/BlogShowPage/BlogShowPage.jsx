import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


export default function BlogShowPage() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
  
useEffect(() => {
    async function fetchPost(){
        try {
            const res= await fetch(`http://localhost:3001/blogs/${id}`)
            const data = await res.json();
            setPost(data)
        } catch (error) {
            console.error('Error fetching post:', error)
        }
    }
    fetchPost()
  }, [id]);
  if (!post){
    return <p> Blog Loading...</p>
  }
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
  )
}