import { useState} from 'react';
import {getBlogs} from '../../utilities/Blogs-api';

export default function CreateBlogForm( {setBlogs}) {
    const [ formData, setFormData] = useState ({
        title:'',
        body: '',
        content:'Neuroscience'
    })

    function handleChange(e) {
        setFormData({
            ...formData, //spread out existing state
            [e.target.name]: e.target.value // this dynamically updates our state

        })
    }

async function handleSubmit(e){
    e.preventDefault(); // We don't want the page to reload
    try {
        const response = await fetch ('http://localhost:3000/blogs', {
            method:"POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        });

        const data = await response.json(); //
        const blogs =await getBlogs()
        setBlogs(blogs)
        console.log(data)
;    }catch (error){
    console.error(error);
    }
    
}


  return (
    <form onSubmit={handleSubmit}>
        <input
        type="text" 
        placeholder="Enter Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        />
         <input
        type="text" 
        placeholder="Enter Body"
        name="body"
        value={formData.body}
        onChange={handleChange}
        />
        <input type="submit" />
    </form>
  )
}
