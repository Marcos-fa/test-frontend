import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Cliente } from "../models/cliente";

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  selectedCliente: Cliente = {
    nombre: '',
    rfc: '',
    telefono: '',
    email: '',
    cp: '',
    direccion: '',
  };
  clientes: Cliente[];
  readonly URL_API = "http://localhost:3000/api/clientes";

  constructor(private http: HttpClient) {
    this.selectedCliente = new Cliente();
  }

  postCliente(cliente: Cliente) {
    return this.http.post(this.URL_API, cliente);
  }

  getClientes() {
    return this.http.get<Cliente[]>(this.URL_API);
  }

  putCliente(cliente: Cliente) {
    return this.http.put(this.URL_API + `/${cliente._id}`, cliente);
  }

  deleteCliente(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  findByNombre(nombre: string) {
    return this.http.get<Cliente[]>(`${this.URL_API}?title=${nombre}`)
  }

  // findByTitle(title: string) {
  //   return this.http.get<Cliente[]>(this.URL_API + `?${title}`)
  // }

}
