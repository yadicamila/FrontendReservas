import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../models/reserva';
import { ReservaService } from '../../service/reserva.service';
import { ModalFacturaComponent } from '../modal-factura/modal-factura.component';
import { RouterModule } from '@angular/router';
import { ReservarComponent } from "../reservar/reservar.component";
import Swal, { SweetAlertResult } from 'sweetalert2';
import { NavbarComponent } from '../navbar/navbar.component';



@Component({
  selector: 'reservas',
  standalone: true,
  imports: [ModalFacturaComponent,ReservarComponent,RouterModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.css'
})
export class ReservasComponent implements OnInit {

  reservas!:Reserva[];
  showCart:boolean=false;
  constructor(private reservaService:ReservaService){

  }
  ngOnInit(): void {
    this.listarReservas();
  }

  
  listarReservas(){
    return this.reservaService.getReservas().subscribe(
      (datos => {
        console.log(datos)
        this.reservas = datos;
      })
    );
  }
  deleteReserva(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result: SweetAlertResult) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, se ejecuta la eliminación
        this.reservaService.deleteReservaById(id).subscribe(
          () => {
            this.listarReservas(); // Actualiza la lista después de eliminar
            Swal.fire(
              '¡Eliminada!',
              'La reserva ha sido eliminada.',
              'success'
            );
          },
          err => {
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar la reserva.',
              'error'
            );
          }
        );
      }
    });
  }
  


  openCloseCart():void{
    this.showCart=!this.showCart
  }
  

}
