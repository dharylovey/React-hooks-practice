import { useState } from "react"

const UseState = () => {
    const [count, setCount] = useState(0)

    const handleIncrease = ()=> {
        setCount(prev => prev + 1)
    }
    const handleDecrease = ()=> {
        setCount(prev => prev - 1)
    }
    const reset = ()=> {
        setCount(0)
    }


  return (
    <div>
      {count}
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={reset}>Reset</button>
      

    </div>
  )
}

export default UseState
