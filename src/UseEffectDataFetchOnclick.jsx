import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectFetchData = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1)
  const [buttonIdClick, setButtonClick] = useState(1)

  const handleClick = () => {
    setButtonClick(id)
  } 
  
  useEffect(() => {
   (async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${buttonIdClick}`
        );
        const data = response.data;
        console.log(data);
        setPost(data);
      } catch (error) {
        return <p>{error}</p>
      }
    })();

  }, [buttonIdClick]);
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Get Data</button>
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
