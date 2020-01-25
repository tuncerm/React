import React from 'react';

export default function Button({text, action}){
    return <button onClick={action}>{text}</button>
}