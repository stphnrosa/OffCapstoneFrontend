import { useState} from 'react';

export default function CreateBlogForm() {
    const [ formData, setFormData] = useState ({
        title:'',
        body: '',
        content:''
    })

    function handleChange(e) {
        setFormData({
            ...formData, //spread out existing state
            [e.target.name]: e.target.value // this dynamically updates our state

        })
    }

  return (
    <form>
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
