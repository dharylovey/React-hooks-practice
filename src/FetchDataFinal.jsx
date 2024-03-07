import axios from "axios";
import { useState, useEffect } from "react"

const FetchDataFinal = () => {
    const [posts, setPosts] = useState([])
    const [id, setId] = useState(1)
    const [buttonClick, setButtonClick] = useState(1)

    const handleClick = () => {
        setButtonClick(id)
    }

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
                const data = response.data
                console.log(data)
                if (!data) {
                    return <p>no result</p>
                } else {
                    setPosts(data)

                }
            } catch (error) {
                console.log(error)
            }
        })();
    }, [buttonClick])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Data</button>
            <div>{posts.title}</div>
            {/* <ul>
        {posts.map(post => (
            <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
        </div>
    )
}

export default FetchDataFinal
