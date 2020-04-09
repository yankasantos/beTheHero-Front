import React from 'react';

function Header({children}){
    /* essa alteração equivale ao props.chidren, que serve para acessar 
     * o que esta sendo passado para o componente onde ele esta sendo usado
     * */
    return(
        <header>           
            <h1>{children}</h1>
        </header>
    );
}

export default Header;