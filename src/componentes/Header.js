import React, {Fragment} from 'react';



function Header({titulo, cantidad}){

    return(
        
        <Fragment>
       <h1>{cantidad}</h1>
        </Fragment>
        

    );
}

export default Header;