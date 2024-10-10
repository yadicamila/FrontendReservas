import { CentroRecreativo } from "./centroRecreativo";

export class Infraestructura{
    idInfraestructura!:number;
    nombre!:string;
    tarifaPlena!:number;
    disponibilidad!:number;
    centroRecreativo!:CentroRecreativo;
}