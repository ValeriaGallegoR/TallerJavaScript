import Televisor from './Televisor'
import Nevera from '.Nevera'
import Electrodomesticos from './Electrodomesticos'
import index from 'index.html'



document.getElementById("botonSubmit").addEventListener("click", function() {
    let tipo = document.getElementById("tipoProducto").value;
    let consumo = document.getElementById("categoria").value;
    let procedencia = document.getElementById("procedencia").value;
});


function mostrar(){
    var myselect = document.getElementById("select1");
  alert(myselect.options[myselect.selectedIndex].value);
    //document.getElementById('divTextPulgadas').style.display = 'none';
};

