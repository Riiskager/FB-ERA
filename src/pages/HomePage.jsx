import { useState, useEffect } from "react";
import PostCard from "../components/PostCard";


export default function HomePage() {
    const [posts, setPosts] = useState([]);

useEffect(() => {
  async function getPosts() {
    // UDSKIFT [dit-projekt-navn] med dit faktiske Firebase projekt navn!
    const url = "https://fb-era-default-rtdb.firebaseio.com/posts.json";
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data fra Firebase:", data);

    const postsArray = Object.keys(data).map(key => ({
        id: key,
        ...data[key]
    }));

    console.log("Posts array:", postsArray);
    setPosts(postsArray);
  }
  getPosts();
}, []);

    return (
  <section className="page">
    <section className="grid">
      {
  posts.map(post => <PostCard post={post} key={post.id} />)
}
    </section>  
  </section>
    );
}
