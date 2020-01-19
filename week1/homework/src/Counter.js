import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter(){
    let [count, updateCount] = useState(0);
    const increment = function(){
        updateCount(count+1);
    }
    const feedback = count>10 ? "It's higher than 10!":"Keep counting...";
    return (
        <div>
            <p>{feedback}</p>
            <Count text={count} />
            <Button text="Add 1" action={increment}/>
        </div>
    )
}

export default Counter;