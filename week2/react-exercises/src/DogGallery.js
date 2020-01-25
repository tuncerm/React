import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';

export default function DogGallery(){
    const [dogPhotos, setDogPhotos] = useState([]);

    function getDogPhoto(){
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(data=>setDogPhotos([...dogPhotos, data.message]));
    }

    return(
        <div>
           <Button text="Get a dog!" action={getDogPhoto}/> 
           <br/>
           {dogPhotos.map(url=><DogPhoto key={url} url={url}/>)}
        </div>
    )
}