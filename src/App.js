import React, { useEffect, useState} from 'react'; 
import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';


function App() {
  const [gifs, setGifs] =  useState([]);

  useEffect(() => {
    getGifs('git', 4).then(gifs => setGifs(gifs));
  }, []); //El segundo parámetro del useEffect indica las dependencias, el parametro que debe cambiar para volver a renderizar el componente
          //En este caso es un array vacío, eso indica que solo se ejecuta la primera vez que se renderiza
  return (
    <div className="App">
      <section className='App-content'>
      <ol>
        <ListOfGifs gifs = {gifs}/>
      </ol>
      </section>
    </div>
    );
}

export default App;
