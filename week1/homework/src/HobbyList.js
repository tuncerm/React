import React from 'react';
import Hobbies from './Hobbies';

function HobbyList({hobbies}){
    return( 
        <ul>
            {hobbies.map(hobby=>{
                return <Hobbies key={hobby} hobby={hobby} />
            })}
        </ul>
    )
}

export default HobbyList;