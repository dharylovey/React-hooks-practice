import { useReducer } from "react";

const initVal = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return { ...state,  secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initVal
        default:
            return state
            
    }
}

const ReducerComplex = () => {

    const [count, dispatch] = useReducer(reducer, initVal)
  return (
    <div>
        <div>First Count = {count.firstCounter}</div>
        <div>Second Count = {count.secondCounter}</div>
        <button onClick={()=> dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={()=> dispatch({type:'decrement', value: 1})}>Decrement</button>
        <button onClick={()=> dispatch({type: 'increment', value: 5})}>Increment 5</button>
        <button onClick={()=> dispatch({type:'decrement', value: 5})}>Decrement 5</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        <div>
        <button onClick={()=> dispatch({type: 'increment2', value: 1})}>Increment counte2</button>
        <button onClick={()=> dispatch({type:'decrement2', value: 1})}>Decrement counter2</button>
        </div>
    </div>
  )
}

export default ReducerComplex
