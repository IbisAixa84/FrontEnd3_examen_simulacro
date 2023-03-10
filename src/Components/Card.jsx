import React from 'react'

const Card = ({name, color }) => {

  return (
    <div>
        <h1>Tu nombre: {name}</h1>
        <h2>Tu color favorito: {color}</h2>
    </div>
  )
}

export default Card