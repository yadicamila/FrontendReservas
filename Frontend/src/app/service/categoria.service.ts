import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private urlBase = "http://localhost:8080/api/categorias";
  constructor(private clienteHttp: HttpClient) { }

  // metodo para obtener todos los customers
  getCategorias(): Observable<Categoria[]>{
    return this.clienteHttp.get<Categoria[]>(this.urlBase);
  }
}
