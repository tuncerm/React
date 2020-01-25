import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

export default function Friend(){
    const [friend, setFriend] = useState({});

    function getFriend(){
        fetch('https://www.randomuser.me/api?results=1')
        .then(res=>res.json())
        .then(data=>setFriend(data.results[0]));
    }

    return(
        <div>
            {Object.entries(friend).length ? <FriendProfile friend={friend}/> : "" }
            <Button text="Get a friend!" action={getFriend}/>
        </div>
    )
}