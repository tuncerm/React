import React, { useState, useEffect } from 'react'
import Joke from './Joke';

export default function RandomJoke(){
    const [joke, setJoke] = useState({});
    useEffect(()=>{
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(res=>res.json())
            .then(data => setJoke(data));
    }, []);

    return (
        <div>
            {Object.entries(joke).length ? <Joke q={joke.setup} a={joke.punchline} />: ''}
        </div>
    )
}