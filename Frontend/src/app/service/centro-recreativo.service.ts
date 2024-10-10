import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CentroRecreativo } from '../models/centroRecreativo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CentroRecreativoService {
  private urlBase = "http://localhost:8080/api/centros";
  constructor(private clienteHttp: HttpClient) { }

  // metodo para obtener todos los customers
  getCentros(): Observable<CentroRecreativo[]>{
    return this.clienteHttp.get<CentroRecreativo[]>(this.urlBase);
  }
}
