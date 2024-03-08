import { useReducer } from "react"

const initValue = {
    first: 0,
    second: 20
}

const reducer = (state , action) => {
    switch(action.type){
        case 'increment':
            return { ...state, first: state.first +  action.value}
        case 'decrement':
            return { ...state, first: state.first - action.value}
        case 'increment2':
            return { ...state, second: state.second +  action.value}
        case 'decrement2':
            return { ...state, second: state.second - action.value}
        case 'reset':
            return initValue
        default:
            return state
        
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initValue)
  return (
    <div>
      <div>{count.first}</div>
      <div>{count.second}</div>

      <button onClick={() => dispatch({type: 'increment', value: 1})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>decrement</button>
      <button onClick={() => dispatch({type: 'increment2', value: 10})}>increment</button>
      <button onClick={() => dispatch({type: 'decrement2', value: 10})}>decrement</button>
      <button onClick={() => dispatch({type: 'reset', })}>reset</button>
    </div>
  )
}

export default UseReducer
