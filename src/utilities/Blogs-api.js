export async function getBlogs() {
  try {
    const response = await fetch("http://localhost:3000/blogs");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
