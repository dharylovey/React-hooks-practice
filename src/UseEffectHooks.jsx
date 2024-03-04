import {useState, useEffect} from 'react'

const UseEffectHooks = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('before click')
        document.title = `${count} times`
    },[count])
  return (
    <div>
        {count}
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Click times</button>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

export default UseEffectHooks
