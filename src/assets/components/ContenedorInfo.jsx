import React from 'react'
import { item } from '../../../InfoItems'
import Contenido from './Contenido'

const ContenedorInfo = () => {
  return (
    <div>
        {
            item.map(item =>{
                return (
                    <Contenido key={item.id} item={item}/>
                )
            })
        }
    </div>
  )
}

export default ContenedorInfo