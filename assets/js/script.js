let listaNombresGastos = [];
let listavaloresGastos = [];

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);


    listaNombresGastos.push(nombreGasto);
    listavaloresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listavaloresGastos);
    
    //alert('Click de usuario')
    actualizarListaGastos();

}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion) =>{
        const valorGasto = Number(listavaloresGastos[posicion]);
       htmlLista += `(<li>${elemento} - COP ${valorGasto.toFixed(2)} 
       <button  onclick="eliminarGasto(${posicion});">eliminar</button>
       </li>)`;
       
       // calculamos el total de gastos
       totalGastos += Number(valorGasto);

    });
    listaElementos.innerHTML =  htmlLista;
    totalElementos. innerHTML = totalGastos.toFixed(2);
    limpiar();
}
function limpiar(){
 document.getElementById('nombreGasto').value = '';
  document.getElementById('valorGasto').value = '';
   
}
function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listavaloresGastos.splice(posicion,1);
    actualizarListaGastos();

}