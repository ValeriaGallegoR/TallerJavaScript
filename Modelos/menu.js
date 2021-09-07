
document.getElementById("botonSubmit").addEventListener("click", function() {
    let tipo = document.getElementById("tipoProducto").value;
    let consumo = document.getElementById("categoria").value;
    let procedencia = document.getElementById("procedencia").value;
});

function mostrarDatosProductos() {
    var select = document.getElementById('select1')
    if(select.value=="opcionTv"){
        document.getElementById('divTextLitros').style.display = 'none'
        document.getElementById('divTextPulgadas').style.display = ''
        document.getElementById('divTextTdt').style.display = ''
    }
    if(select.value=="opcionNevera"){
        document.getElementById('divTextPulgadas').style.display = 'none'
        document.getElementById('divTextTdt').style.display = 'none'
        document.getElementById('divTextLitros').style.display = ''                                     
    }
    if(select.value=="opcionElect"){
        document.getElementById('divTextPulgadas').style.display = 'none'
        document.getElementById('divTextLitros').style.display = 'none' 
        document.getElementById('divTextTdt').style.display = 'none'                                   
    }            
}

