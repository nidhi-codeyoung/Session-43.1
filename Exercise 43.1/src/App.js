import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts" 
});

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }

  if (!post) return "No post!"

  return (
    <div>
      <center>
        <h3>Example of using the Async-Await Syntax with Axios</h3>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
      <button onClick={deletePost}>Delete Text</button>
      </center>
    </div>
  );
}