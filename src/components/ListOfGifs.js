import Gif from './Gif'
import getGifs from '../services/getGifs';
import React, {useEffect, useState} from 'react'

export default function ListOfGifs({params}) {
  const {keyword, limit} = params;
  const [gifs, setGifs] =  useState([]);

  useEffect(() => {
    getGifs(keyword, limit)
    .then(gifs => setGifs(gifs));
  }, [keyword, limit]);

  return <div> 
    {
      gifs.map(({id, url}) => 
      <Gif key={id} id={id} url={url}/>
      )
    }
  </div>
}