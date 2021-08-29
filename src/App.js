import logo from './logo.svg';
import './App.css';
import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/mensaje';
import Resultado from './componentes/resultado';

function App() {
  //Se define state

  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);


  let componente;

  if(total === 0){
    componente = <Mensaje/>
  }else{
    componente = <Resultado
                      total = {total}
                      plazo = {plazo}
                      cantidad = {cantidad}
    
                 />
  }


  return (

    <Fragment>
      < Header
            titulo="COTIZADOR DE PRESTAMOS"
            
      />

      <div className="container">
        <Formulario
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
            total={total}
            guardarTotal={guardarTotal}
            />
          <div className="mensajes">
          {componente}
          </div>  
            
      </div>

      
      
    </Fragment>      
    
    

     
  );
}

export default App;
