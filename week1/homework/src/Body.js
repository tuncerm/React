import React from 'react';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';

function Body({activeComponent}){
    switch (activeComponent) {
        case "exercise1":
            return <Ex1 />;
        case "exercise2":
            return <Ex2 />;
        case "exercise3":
            return <Ex3 />;
        default:
            return null;
    }
}

export default Body;