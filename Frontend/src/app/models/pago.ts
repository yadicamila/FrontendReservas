import { Factura } from "./factura";

export class Pago {
    idPago!: number;                 
    fechaPago!: Date;                
    monto!: number;                  
    metodoPago!: string;             
    factura!: Factura;               
}