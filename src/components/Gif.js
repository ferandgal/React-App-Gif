import React from 'react'

export default function Gif ({title, id, url}) {
    return (
        <div>
            <li>
              <h4>{title}</h4>
              <img alt='Gif buscado de la API' src={url}/>
              <p>ID: {id}</p>
            </li>
        </div>
    )
}