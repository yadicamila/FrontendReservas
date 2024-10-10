import { Reserva } from "./reserva";

export interface Factura {
    idFactura: number;             
    fechaEmision: Date;            
    montoTotal: number;            
    descuento: number;             
    reserva: Reserva;              
}