import React from 'react'

const Form = ({handleChange, handleSubmit, values}) => {
  return (
    <div>
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
        <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form 
