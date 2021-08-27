import logo from './logo.svg';
import './App.css';
import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {
  //Se define state

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');


  return (

    <Fragment>
      < Header
            titulo="COTIZADOR DE PRESTAMOS"
            cantidad={cantidad}
      />

      <div className="container">
        <Formulario
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
            />
      </div>
      
    </Fragment>      
    
    

     
  );
}

export default App;
