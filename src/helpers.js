export function calcularTotal (cantidad, plazo){

    //interes segun cantidad
    //0 - 1000 = 25%
    //1001 - 5000 = 20%
    //5001 - 10000 = 15%
    //+ 10000 = 10%



    let totalCantidad;

    if(cantidad <= 1000){
        totalCantidad = cantidad * .25;
    }else if(cantidad > 1000 && cantidad <= 5000){
        totalCantidad = cantidad * .20;
    }else if(cantidad > 5000 && cantidad <= 10000){
        totalCantidad = cantidad * .15;
    } else{
        totalCantidad = cantidad * .10;
    }

    //Calculo del plazo

    // 3 meses = 5%
    // 6 meses = 10%
    // 12 meses = 15%
    // 324 meses = 20%

    let totalPlazo = 0;

    switch(plazo) {
        case 3:
            totalPlazo = cantidad * .05;
            break;
        case 6:
            totalPlazo = cantidad * .10;
            break;
        case 12:
            totalPlazo = cantidad * .15;
            break;
        case 24:
            totalPlazo = cantidad * .20;
            break;
        default:
            break;    
            
 }

 return totalPlazo + totalCantidad + cantidad;




    


}