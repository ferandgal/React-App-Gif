import React from 'react'

export default function Gif ({title, id, url}) {
    return (
        <a href= {`#${id}`}>
              <h4>{title}</h4>
              <img alt='Gif buscado de la API' src={url}/>
        </a>
    )
}