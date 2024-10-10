import { Categoria } from "./categoria";

export class Usuario{
    idUsuario!: number;
    nombre!:string;
    apellido!:string;
    documento!:number;
    tipoUsuario!:string;
    direccion!:string;
    telefono!:number;
    categoria!:Categoria;
}