import React, { useState } from 'react';
import './App.css';
import Friend from './Friend';
import DogGallery from './DogGallery';
import RandomJoke from './RandomJoke';
import Button from './Button';

function App() {
  const [page, setPage] = useState('');

  function changePage(p){
    setPage(p);
  }

  return (
    <div className="App">
      <Button text="Friend" action={()=>(changePage('ex1'))}/>
      <Button text="Dog Gallery" action={()=>(changePage('ex2'))}/>
      <Button text="Random Joke" action={()=>(changePage('ex3'))}/>
      <hr/>
      {page ? page === 'ex1' ? <Friend /> : page === 'ex2' ? <DogGallery /> : page === 'ex3' ? <RandomJoke /> : null : null}
      <hr/>
      <a href="https://github.com/tuncerm/HackYourWeather/tree/week2" target="_blank" rel="noopener noreferrer">Project Week2 Repo</a>
      <br/>
      <a href="https://pedantic-morse-f490c8.netlify.com/" target="_blank" rel="noopener noreferrer">Project Week2 Netlify</a>
    </div>
  );
}

export default App;
