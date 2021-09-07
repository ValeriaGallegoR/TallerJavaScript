import { Electrodomesticos } from "./Electrodomesticos";


class Nevera extends Electrodomesticos {
    constructor(consumo, procedencia, litros){
        super(consumo,procedencia);
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.litros = litros;
    }
    obtenerAumento(){
        var cantidadLitros = 0;
        if (this.litros > 120) {
            cantidadLitros = (this.litros - 120) / 10;
            porcentaje = cantidadLitros * 0.05;
            this.precio = super.getTotal() * porcentaje;
        } else {
            this.precio = 0;
        }return this.precio;
    } 
}