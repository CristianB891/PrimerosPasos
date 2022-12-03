




<script>
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import {ObtenerCoches} from './backSimulado';


let coches = [];


const ObtenerCochesLlamandoAlBack = () => {
    coches = ObtenerCoches();
}
ObtenerCochesLlamandoAlBack();
const preguntaBorrarCoche = (id, modelo) => {
    
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Si lo haces, borraras el '+ modelo,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, hazlo!',
      cancelButtonText: 'Nop'
    }).then((result) => {
      if (result.value) {        
        
            borrarCoche(id);
            Swal.fire('Borrado, te has quedado sin coche', 'Ok');    
        
        
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelado', 'Los coches son caros...', 'info');
      }
    });
    
} 
function borrarCoche(id){
    let newArr = coches.filter(x => x.id != id);
    console.log(newArr);
    coches = newArr;
    coches = coches;
}
function refrescarCoches(){
    coches = ObtenerCoches();
    coches = coches;
}
</script>

<main>
    <h1>Hola</h1>    
<hr>
<button on:click={refrescarCoches}>Refrescar coches</button>
<table>
    <thead>
        <tr>
        <th>modelo</th>
        <th>vMax</th>
        <th>fecha</th>
        <th>antiguedad</th>
        <th>BORRAR COCHE</th>
        </tr>
    </thead>
    <tbody>
        {#each coches as coche}
        <tr>            
            <td>{coche.modelo}</td>
            <td>{coche.vMax}</td>
            <td>{coche.fecha_matriculacion}</td>
            <td>{coche.antiguedad}</td>    
            <td><button on:click={() => {
                        preguntaBorrarCoche(coche.id, coche.modelo)
                    }}>
                    Borrar
                </button>
            </td>
        </tr>
        {/each}
    </tbody>
</table>



</main>