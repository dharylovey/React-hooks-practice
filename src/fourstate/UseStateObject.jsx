import { useState } from "react";


const UseStateObject = () => {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        if(name.firstName === ''){
            alert('Please enter Firstname.')
            return
        }
        if(name.lastName === '') {
            alert('Please enter Lastname')
        }
        alert(`Thanks ${name.firstName} ${name.lastName}`)
        setName({
            ...name,
            firstName: '',
            lastName: ''
        })
    }



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setName({
                    ...name,
                    firstName: e.target.value
                })}
            />
            <input 
                type="text" 
                value={name.lastName}
                onChange={e => setName({
                    ...name,
                    lastName: e.target.value
                })}
            />

            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default UseStateObject
