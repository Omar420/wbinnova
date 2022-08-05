export class Buscar {
    _id?: number;
    marca: string;
    modelo: string;
    monedatipo: string;
    precio: number;
    fechayhora: Date;
    store: string;
    ubicacion: string;

    constructor(marca: string, modelo: string, monedatipo: string, precio: number, fechayhora: Date, store: string, ubicacion: string){
        this.marca = marca;
        this.modelo = modelo;
        this.monedatipo = monedatipo;
        this.precio = precio;
        this.fechayhora = fechayhora;
        this.store = store;
        this.ubicacion = ubicacion;

    }
}