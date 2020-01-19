import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';

function App() {
  const [activeComponent, setActiveComponent] = useState("");
  const componentData = [
    {text: 'exercise1', action: function(){setActiveComponent("exercise1")}},
    {text: 'exercise2', action: function(){setActiveComponent("exercise2")}},
    {text: 'exercise3', action: function(){setActiveComponent("exercise3")}}
  ]

  return (
    <div className="App">
      <Header headerItems = {componentData}/>
      <hr/>
      <main>
        <Body activeComponent = {activeComponent}/>
      </main>
      <hr/>
      <footer>
        <a href="https://github.com/tuncerm/HackYourWeather" target="_blank">Project Repo</a>
        <br/>
        <a href="https://stupefied-pike-1c45d2.netlify.com/" target="_blank">Project Netlify</a>
      </footer>
    </div>
  );
}

export default App;