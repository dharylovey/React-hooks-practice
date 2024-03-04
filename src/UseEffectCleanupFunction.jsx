import { useState } from "react"
import UseEffectMouseHook from './UseEffectMouseHook'


const UseEffectCleanupFunction = () => {
    const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UseEffectMouseHook />}
    </div>
  )
}

export default UseEffectCleanupFunction
