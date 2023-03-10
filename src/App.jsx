import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {

  const [values, setValues] = useState({
    name: '',
    color: '',
    obraSocial: ''
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

      <form onSubmit={handleSubmit}>
        <label >Ingresa tu nombre</label>
        <input
          name='name'
          placeholder='Ingresa tu nombre' 
          type="text"
          value={values.name}
          onChange={handleChange}
        />
        <label >Ingresa tu color favorito</label>
        <input 
          name='color'
          placeholder='Ingresa tu color favorito' 
          type="text"
          value={values.color}
          onChange={handleChange}
        />
        <input type="text"  name='obraSocial'/>
        <button>Enviar</button>
      </form>
      {err ? <h3 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h3> : null}
     
      {show ? <Card name={values.name} color={values.color}/> : null}
    </div>
  )
}

export default App
