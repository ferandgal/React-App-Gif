import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route, useLocation} from "wouter"
import React, { useState } from 'react';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [path, pushLocation] = useLocation();

  console.log(path);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(keyword);
    pushLocation(`/gif/${keyword}/5`);
  }
  //Cada vez que se cambia el input se cambia el estado
  const handleChange = evt => {
    setKeyword(evt.target.value);
  }
  
  return (
    <div className="App">
      <section className='App-content'>
        <h1>Buscador de Gifs</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder="Busca un gif" type='text' value={keyword} />
          <input type="submit" value="Buscar"/>
        </form>
        <Link to='/gif/git/3'>Git</Link>
        <Route 
          component = {ListOfGifs}
          path="/gif/:keyword/:limit" />
      </section>
    </div>
    );
}

