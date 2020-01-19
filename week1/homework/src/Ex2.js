import React from 'react';
import chat from './chat.png';
import coin from './coin.png';
import delivery from './f-delivery.png';
import Guarantee from './Guarantee';

function Ex2(){
    const data = [
        {img: delivery, key: 1, title: "Free shipping", description:"Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra curcus."},
        {img: coin, key: 2, title: "100% Money back", description:"Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra curcus."},
        {img: chat, key: 3, title: "Online support 24/7", description:"Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra curcus."}
    ]

    return(
        <div>
            {data.map(d=>{
                return <Guarantee key={d.key} img={d.img} title = {d.title} description={d.description} />
            })}
        </div>
    )
}

export default Ex2;