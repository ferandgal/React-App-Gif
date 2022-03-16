import React from 'react'

export default function Gif ({id, url}) {
    return (
        <a href= {`#${id}`}>
            <img className='gif-item' alt='Gif buscado de la API' src={url}/>
        </a>
    )
}