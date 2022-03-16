import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route, useLocation} from "wouter"
import React, { useState } from 'react';

export default function App() {
  const [keyword, setKeyword] = useState('');
  const [limit, setLimit] = useState(30);
  const [path, pushLocation] = useLocation();

  console.log(path);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(keyword);
    console.log(limit);
    pushLocation(`/gif/${keyword}/${limit}`);
  }
  //Cada vez que se cambia el input se cambia el estado
  const handleKeywordChange = evt => {
    setKeyword(evt.target.value);
  }

  const handleLimitChange = evt => {
    setLimit(evt.target.value);
  }
  
  return (
    <div className="App">
      <section className='App-content'>
        <h1>Buscador de Gifs</h1>
        <form className='searcher-input' onSubmit={handleSubmit}>
          <input className='input-text' onChange={handleKeywordChange} value={keyword} placeholder='Busca información de F1...'/>
          <input className='input-number' onChange={handleLimitChange} placeholder="Nº" type='number' value={limit} />
          <input className='input-button' type="submit" value="Buscar"/>
        </form>
        <Link to='/gif/git/30'>Git</Link>
        <Link to='/gif/shit/30'>Shit</Link>
        <Link to='/gif/spain/30'>Spain</Link>
        <div className='listGifs'>
        <Route 
          component = {ListOfGifs}
          path="/gif/:keyword/:limit" />
        </div>
      </section>
    </div>
    );
}

