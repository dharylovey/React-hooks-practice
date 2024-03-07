import ComponentF from "./ComponentF"
import { useContext } from "react"
import { UserContext, MultiContext } from "../App"

const ComponentE = () => {

    const user = useContext(UserContext)
    const multi = useContext(MultiContext)

  return (
    <div>
        <ComponentF />
        {user} {multi}
    </div>
  )
}

export default ComponentE
