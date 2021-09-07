
function mostrarDatosProductos() {
    var select = document.getElementById('select1')
    if(select.value=="opcionTv"){
        document.getElementById('divTextLitros').style.display = 'none'
        document.getElementById('divTextPulgadas').style.display = ''
        document.getElementById('divTextTdt').style.display = ''
        llenarListaTv();
    }
    if(select.value=="opcionNevera"){
        document.getElementById('divTextPulgadas').style.display = 'none'
        document.getElementById('divTextTdt').style.display = 'none'
        document.getElementById('divTextLitros').style.display = '' 
        llenarListaNevera();                                    
    }
    if(select.value=="opcionElect"){
        document.getElementById('divTextPulgadas').style.display = 'none'
        document.getElementById('divTextLitros').style.display = 'none' 
        document.getElementById('divTextTdt').style.display = 'none'     
        llenarListaElectro();                              
    }            
}

function llenarListaTv(){
    var pulgadas=document.getElementById("divTextPulgadas").value;
    var tdt=document.getElementById("divTextTdt").value;
    var procedencia=document.getElementById("procedencia").value;
    var categoria=document.getElementById("categoria").value;
    var stock=document.getElementById("numStock").value;
    var listaTelevisor =new Array();
    listaTelevisor.add(stock,pulgadas,tdt,procedencia,categoria);
}

function llenarListaNevera(){
    var litros=document.getElementById("divTextLitros").value;
    var procedencia=document.getElementById("procedencia").value;
    var categoria=document.getElementById("categoria").value;
    var stock=document.getElementById("numStock").value;
    var listaNevera =new Array();
    return listaNevera.add(stock,litros,procedencia,categoria);
}

function llenarListaElectro(){
    var procedencia=document.getElementById("procedencia").value;
    var categoria=document.getElementById("categoria").value;
    var stock=document.getElementById("numStock").value;
    var listaElect =new Array();
    return listaElect.add(stock,procedencia,categoria);
}
