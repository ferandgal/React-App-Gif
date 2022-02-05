import React, { useEffect, useState} from 'react'; 
import './App.css';

const apiURL = 'https://api.giphy.com/v1/gifs/search?api_key=GgZFxJX9fFGwSxfJzSop7I3Tx9bea6bj&q=nano&limit=5&offset=0&rating=g&lang=es';

function App() {
  const [gifs, setGifs] =  useState([]);

  useEffect(() => {
    console.log("Efecto cada vez que se renderiza");
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response; 
      })
  });

  return (
    <div className="App">
      <section className='App-content'>
        {
          gifs.map(singleGif => <img alt='Gif buscado de la API' src={singleGif}/>)
        }
      </section>
    </div>
  );
}

export default App;
