import { useState } from "react"

const HooksObject = () => {
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.firstName === '' ) {
      alert('Please Enter Firstname!');
      return;
    }
    
    if(name.lastName === ''){
      alert('Please enter Lastname!')
      return;
    }
    alert(`Thank you Mr/Mrs: ${name.firstName} ${name.lastName}`)
    setName({
      ...name,
      firstName: '',
      lastName: ''
    })
    console.log(name)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name.firstName} 
        onChange={e => setName({
          ...name, 
          firstName: e.target.value
        })}
        className="border-slate-200"
      />
      <input 
        type="text" 
        value={name.lastName} 
        onChange={e => setName({
          ...name,
          lastName: e.target.value
        })}/>
      <h2>Name: {name.firstName}</h2>
      <h2>Lastname: {name.lastName}</h2>
      <button>Submit</button>
      
    </form>
  )
}

export default HooksObject
