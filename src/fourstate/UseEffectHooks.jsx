import { useState, useEffect } from "react"
import axios from "axios"

const UseEffectHooks = () => {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1);
    const [buttonClick, setButtonClick] = useState(1)

    useEffect(() => {
        (async () => {
            try {
                const response =await axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
                const data = response.data
                setPost(data)
                console.log(data);
                
            } catch (error) {
                console.log(error)
            }
        })();
    }, [buttonClick])

    const handleclick = ()=> {
        setButtonClick(id)
    }
  return (
    <div>
        <input type="text" value={id} onChange={e => setId(e.target.value)}/>
        <p>{post.title}</p>
        <button onClick={handleclick}>fetch data</button>
        {/* {
            posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))
        } */}
      
    </div>
  )
}

export default UseEffectHooks
