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
      gifs.map(({id, title, url}) => 
      <Gif
        key={id}
        title={title} 
        url={url} 
        id={id}
      />
    )
  }
  </div>
}