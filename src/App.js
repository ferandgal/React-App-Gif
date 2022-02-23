import './App.css';
import ListOfGifs from './components/ListOfGifs';

import { Link, Route} from "wouter"

export default function App() {
  return (
    <div className="App">
      <section className='App-content'>
        <h1>Buscador de Gifs</h1>
        <Link to='/gif/git/3'>El nano campeón</Link>
        <Route 
          component = {ListOfGifs}
          path="/gif/:keyword/:limit" />
      </section>
    </div>
    );
}

