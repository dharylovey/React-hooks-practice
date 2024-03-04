import { useEffect, useState } from "react"

const UseEffectIncorrectDep = () => {
    const [count, setCount] =useState(0);

    const counter = () => {
        setCount(count => count +  1)
    }

    useEffect(()=> {
        const interval = setInterval(counter, 1000)
        return () => {
            clearInterval(interval)
        }
    },[])

  return (
    <div>
      {count}
    </div>
  )
}

export default UseEffectIncorrectDep
