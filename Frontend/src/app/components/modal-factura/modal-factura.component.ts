import { Component, Input } from '@angular/core';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'modal-factura',
  standalone: true,
  imports: [],
  templateUrl: './modal-factura.component.html',
  styleUrl: './modal-factura.component.css'
})
export class ModalFacturaComponent {
@Input() reservas!:Reserva[];
}
