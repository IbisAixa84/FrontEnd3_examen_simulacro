import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Form from './Components/Form'


function App() {

  const [values, setValues] = useState({
    name: '',
    color: ''
  })
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(values.name.indexOf(" ") !== 0 && values.name.length >= 3 && values.color.length >= 6) {
      setShow(true)
      setErr(false)
    } else {
      setErr(true)
      setShow(false)
    }
  }
  
  const handleChange = (event) => {
    setValues({
      ...values, 
      [event.target.name] : event.target.value 
    })
  }

  return (
    <div className="App">

      <Form handleChange={handleChange} values={values} handleSubmit={handleSubmit}/>
      {err ? <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h3> : null}
     
      {show ? <Card name={values.name} color={values.color}/> : null}
    </div>
  )
}

export default App
