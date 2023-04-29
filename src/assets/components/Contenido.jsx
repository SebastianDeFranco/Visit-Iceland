import React from 'react'
import { item } from '../../InfoItems'

const Contenido = ({ item }) => {
  const { id, img, name, description } = item

  return (
    <div className='info'>
      <div className="info-card" id={`section${id}`}>
        <div className='info-texto' >
          <h2 className='info-texto__titulo'>{name}</h2>
          <p className='info-texto__parrafo'>{description}</p>
          <button className='info-texto__btn'>See More</button>
        </div>
        <div className='info-img'>
          <img src={img} alt={name} />
        </div>
      </div>
    </div>
  ) 
}

export default Contenido