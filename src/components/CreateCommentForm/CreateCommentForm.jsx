import { useState } from "react";

export default function CreateCommentForm({ blogId, setComments }) {
  const [formData, setFormData] = useState({ body: "" });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const commentData = { content:formData.body, blogId }
      const response = await fetch(`http://localhost:3000/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentData),
      });
      const newComment = await response.json();
      setComments((prev) => [...prev, newComment]);
      setFormData({ body: "" });
    } catch (error) {
      console.error("Failed to create comment", error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="body"
        placeholder="Add a comment"
        value={formData.body}
        onChange={handleChange}
      />
      <button type="submit">Post</button>
    </form>
  );
}
