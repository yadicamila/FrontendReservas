import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reserva } from '../models/reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private urlBase = "http://localhost:8080/api/reservas";
  constructor(private clienteHttp: HttpClient) { }

  // metodo para obtener todas las reservas
  getReservas(): Observable<Reserva[]>{
    return this.clienteHttp.get<Reserva[]>(this.urlBase);
  }
  // metodo para crear una nueva reserva
  createReserva(reserva: Reserva): Observable<Object>{
    return this.clienteHttp.post(this.urlBase, reserva);
  }
  deleteReservaById(id:number):Observable<any>{
    return this.clienteHttp.delete(this.urlBase+'/'+id);
  }

}
