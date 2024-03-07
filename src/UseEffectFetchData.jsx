import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectFetchData = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = response.data;
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <div key={post.id} className="my-4 text-center ">
            <li className="text-2xl underline">{post.title}</li>
            <p className="text-indigo-500">{post.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectFetchData;
