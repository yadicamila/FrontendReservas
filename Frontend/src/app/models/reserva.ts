import { Factura } from "./factura";
import { Infraestructura } from "./infraestructura";
import { Usuario } from "./usuario";

export class Reserva {
    // idReserva!: number;             
    // fechaReserva!: Date;            
    // fechaInicio!: Date;             
    // fechaFin!: Date;                
    // estado!: string;               
    // usuario!: Usuario;              
    // infraestructura!: Infraestructura; 
    // factura!: Factura;   
    constructor(
        public idReserva: number,            
        public fechaReserva: Date,            
        public fechaInicio: Date,              
        public fechaFin: Date,                
        public estado: string,               
        public usuario: Usuario,              
        public infraestructura: Infraestructura, 
        public factura: Factura
    ) {}
}
