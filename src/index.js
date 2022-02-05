import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const useState = React.useState;

const $app = document.querySelector('#app');

const Avatar = props => {
  const [enabled, setEnabled] = useState(true);
  const imgClassName = enabled ? '' : 'disabled';
  const pictureClassName = props.size === 'small' ? 'is-small' : '';
  const src = `https://randomuser.me/api/portraits/women/${props.id}.jpg`;
  return( 
  <picture className={pictureClassName}>
    <img alt="Icono de usuario" onClick = {() => setEnabled(!enabled)} className={imgClassName}  src={src}/>
    <em>{props.name}</em>
  </picture>
  );
};

ReactDOM.render(
  <div>
    <Avatar id={11} name="Elisabeth"/>
    <Avatar id={12} name="Putilla"/>
  </div>
  , $app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
