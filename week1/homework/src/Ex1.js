import React from 'react';
import HobbyList from './HobbyList';

function Ex1(){
    const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"];
    return(
        <HobbyList hobbies = {hobbies}/>
    )
}

export default Ex1;