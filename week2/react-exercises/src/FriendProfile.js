import React from 'react';

export default function FriendProfile({friend}){
    return(
        <ul>
            <li>First name: {friend.name.first}</li>
            <li>Last name: {friend.name.last}</li>
            <li>Address: {friend.location.street.name} / {friend.location.city}</li>
            <li>Country: {friend.location.country}</li>
            <li>e-Mail: {friend.email}</li>
            <li>Phone: {friend.phone}</li>
        </ul>
    )
}