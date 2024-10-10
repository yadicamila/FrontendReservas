import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Infraestructura } from '../models/infraestructura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfraestructuraService {

  private urlBase = "http://localhost:8080/api/infraestructuras";
  constructor(private clienteHttp: HttpClient) { }

  // metodo para obtener todos los customers
  getInfraestructuras(): Observable<Infraestructura[]>{
    return this.clienteHttp.get<Infraestructura[]>(this.urlBase);
  }
}
