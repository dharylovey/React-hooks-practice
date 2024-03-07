import { useReducer } from "react";

const initVal = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return  state + 1
        case 'decrement': 
            return state - 1
        case 'reset':
            return initVal
        default:
            return state
    }
}

const Reducer = () => {
    const [count, dispatch] = useReducer(reducer, initVal)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={()=> dispatch('increment')}>increase</button>
        <button onClick={()=> dispatch('decrement')}>decrease</button>
        <button onClick={()=> dispatch('reset')}>reset</button>
    </div>
  )
}

export default Reducer
