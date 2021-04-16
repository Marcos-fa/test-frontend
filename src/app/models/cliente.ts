export class Cliente {
    constructor(_id = "", nombre = "", rfc = "", telefono = "", email = "", cp = "", direccion = "",) {
      this._id = _id;
      this.nombre = nombre;
      this.rfc = rfc;
      this.telefono = telefono;
      this.email = email;
      this.cp = cp;
      this.direccion = direccion;
    }
  
    _id: string;
    nombre: string;
    rfc: string;
    telefono: string;
    email: string;
    cp: string;
    direccion: string;
  }
  