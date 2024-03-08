import { useState, useEffect } from "react"
import axios from "axios"


const FetchDataUseReducer = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [buttonClick, setButtonClick] = useState(1)

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClick}`)
                const data = response.data
                setLoading(false)
                setPost(data)
                setError('')
                console.log(data);
            } catch (error) {
                setLoading(false)
                setPost({})
                setError('No Result....')
            }
        }
        )()
    }, [buttonClick])
    
    const handleClick = () => {
        setButtonClick(id)
    }

  return (
    <div className="container">
        <input type="text" value={id} onChange={e => setId(e.target.value)} />
        <button onClick={handleClick}>Fetch Data</button>
      {loading ? 'Loading....' : post.title }
      {error ? error : null}
    </div>
  )
}

export default FetchDataUseReducer
