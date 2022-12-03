
import {coches} from './bbddSimulado'


function ObtenerCoches(){

    let cochesParaFront = [];
    let cochesBBDD = llamarBBDD();
    for (let i = 0; i < cochesBBDD.length; i++) {
        let cocheParaAñadir = {
            id: coches[i].id,
            modelo: cochesBBDD[i].modelo,
            vMax: cochesBBDD[i].vMax,
            fecha_matriculacion: cochesBBDD[i].fecha_matriculacion,
            antiguedad: calcularAntiguedad(cochesBBDD[i].fecha_matriculacion),
        }
        cochesParaFront.push(cocheParaAñadir);
    }

    return cochesParaFront;

}

function llamarBBDD(){
    return coches;
}
function añoActual(){    
    return new Date().getFullYear()
}
function calcularAntiguedad(fechaMatriculacion){
    let año = añoActual();
    
    return  año - fechaMatriculacion;
}



export {ObtenerCoches};



