
export class Electrodomesticos {
    constructor(consumo, procedencia){
        this.consumo = consumo;
        this.procedencia = procedencia;
        this.total = tipoConsumo(this.consumo) + procedencia(this.procedencia);
    }
    
     tipoConsumo(consumo) {
        switch(consumo){
            case "A":
                this.valorConsumo= 450.000;
                break;
            case "B":
                this.valorConsumo= 350.000;
                break;
            case "C":
                this.valorConsumo= 250.000;
                break;
        }return valorConsumo;
    }
    procedencia(procedencia) {
        switch(procedencia){
            case "Nacional":
                this.valorProcedencia= 450.000;
                break;
            case "Importado":
                this.valorProcedencia= 350.000;
                break;
        }return valorProcedencia;
    }
}