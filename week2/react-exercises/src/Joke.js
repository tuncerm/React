import React from 'react';

export default function Joke({q,a}){
    return(
        <div>
            <p>Setup: {q}</p>
            <p>Punchline: {a}</p>
        </div>
    )
}