import { useState, useEffect } from "react"

const UseEffectMouseHook = () => {
    const [location, setLocation] = useState({
        x: 0,
        y: 0
    })

    const mouseLog = (e) => {
        console.log('mouse event!')
        setLocation({
            ...location,
            x: e.clientX,
            y: e.clientY
        })
    }

    useEffect(()=> {
        console.log('render!')
        window.addEventListener('mousemove', mouseLog)

        return () => {
          console.log('Unmount code')
          window.removeEventListener('mousemove', mouseLog)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div>
      Hook X - {location.x} & Y - {location.y}

    </div>
  )
}

export default UseEffectMouseHook
