import { Electrodomesticos } from "./Electrodomesticos";


class Televisor extends Electrodomesticos {
    constructor(consumo, procedencia, pulgadas, tdt){
        super(consumo,procedencia);
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.pulgadas = pulgadas;
        this.tdt = tdt;
    }

    esTdt (){
        let resultado = 0;
        if (tdt == true) {
            resultado += 250.000;
        } else {
            resultado = 0;
        } return resultado;
    }

    obtenerAumento (){
        let resultado = 0;
        if (this.pulgadas > 40){
            resultado += super.getTotal() * 0.30;
        }return resultado;
    }
}

