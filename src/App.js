import React, { useEffect, useState} from 'react'; 
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif';


function App() {
  const [gifs, setGifs] =  useState([]);

  useEffect(() => {
    getGifs('morty', 4).then(gifs => setGifs(gifs));
  }, []);

  return (
    <div className="App">
      <section className='App-content'>
      <ol>
        {
          gifs.map(singleGif => <Gif title={singleGif.title} url={singleGif.url} 
            id={singleGif.id}/>
          )
        }
        </ol>
      </section>
    </div>
    );
}

export default App;
