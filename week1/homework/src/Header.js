import React from 'react';
import Button from './Button';

function Header({headerItems}){
    return(
        <header>
            {headerItems.map(headerItem=>{
                return(
                    <Button key={headerItem.text} action={headerItem.action} text={headerItem.text} />
                )
            })}
        </header>
    )
}

export default Header;