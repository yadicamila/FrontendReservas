import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Categoria } from '../../models/categoria';
import { CentroRecreativoService } from '../../service/centro-recreativo.service';
import { CentroRecreativo } from '../../models/centroRecreativo';
import { InfraestructuraService } from '../../service/infraestructura.service';
import { Infraestructura } from '../../models/infraestructura';
import { CategoriaService } from '../../service/categoria.service';
import { Reserva } from '../../models/reserva';
import { ReservaService } from '../../service/reserva.service';
import { Usuario } from '../../models/usuario';
import { Factura } from '../../models/factura';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-reservar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservar.component.html',
  styleUrl: './reservar.component.css',
  encapsulation: ViewEncapsulation.Emulated, // O puedes usar ShadowDom
})
export class ReservarComponent implements OnInit {
  centros!:CentroRecreativo[];
  infraestructuras!:Infraestructura[];
  categorias!:Categoria[];
  idReserva!: number;             
  fechaReserva!: Date;            
  fechaInicio!: Date;             
  fechaFin!: Date;                
  estado: string="Solicitada"; 
  nombre:string=''
  apellido:string=''
  documento!:number;
  direccion:string=''
  telefono:string=''
  categoria:string=''
  usuario!: Usuario;
  factura!: Factura;
  infraestructura!: Infraestructura;
  
  constructor(
    private centrosService:CentroRecreativoService,
    private infraestructurasService:InfraestructuraService,
    private categoriaService:CategoriaService,
    private reservaService:ReservaService
  ){
  }
  ngOnInit(): void {
    this.listarCentros();
    this.listarInfraestructuras();
    this.listarCategorias()
  }

listarCentros(){
  return this.centrosService.getCentros().subscribe(
    (datos => {
      console.log(datos)
      this.centros = datos;
    })
  );
}
listarInfraestructuras(){
  return this.infraestructurasService.getInfraestructuras().subscribe(
    (datosInraestructuras => {
      console.log(datosInraestructuras)
      this.infraestructuras = datosInraestructuras;
    })
  );
}
listarCategorias(){
  return this.categoriaService.getCategorias().subscribe(
    (datos => {
      console.log(datos)
      this.categorias = datos;
    })
  );
}

// crear reserva
addReserva(){
  let reserva = new Reserva(
    this.idReserva,            
    this.fechaReserva,         
    this.fechaInicio,          
    this.fechaFin,             
    this.estado,               
    this.usuario,              
    this.infraestructura,      
    this.factura               
  );

  console.log(reserva);        // Para ver la reserva en la consola
  this.reservaService.createReserva(reserva).subscribe(
    res => console.log(res),   // Muestra la respuesta del servidor
    err => console.error(err)  // Muestra el error si ocurre alguno
  );
}
}
