import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectFetchData = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1)
  useEffect(() => {
   (async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = response.data;
        console.log(data);
        setPost(data);
      } catch (error) {
        return <p>{error}</p>
      }
    })();

  }, [id]);
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <div>{post.title}</div>
      {/* <ul>
        {post.map((post) => (
          <div key={post.id} className="my-4 text-center ">
            <li className="text-2xl underline">{post.title}</li>
            <p className="text-indigo-500">{post.body}</p>
          </div>
        ))}
      </ul> */}
    </div>
  );
};

export default UseEffectFetchData;
