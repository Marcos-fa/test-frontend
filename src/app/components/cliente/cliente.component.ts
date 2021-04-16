import { Component, OnInit, HostListener, ViewChild } from "@angular/core";
import { ClienteService, } from "../../services/cliente.service";
import { NgForm } from "@angular/forms";
import { Cliente } from "../../models/cliente";


@Component({
  selector: "app-cliente",
  templateUrl: "./cliente.component.html",
  styleUrls: ["./cliente.component.css"],
  providers: [ClienteService],
})
export class ClienteComponent implements OnInit {
  constructor(public clienteService: ClienteService) {}
  searchValue: string;
  nombre: string;

  ngOnInit() {
    this.getClientes();
  }

  addCliente(form?: NgForm) {
    if (form.value._id) {
      console.log(form.value)
      this.clienteService.putCliente(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getClientes();
      });
    } else {
      this.clienteService.postCliente(form.value).subscribe((res) => {
        this.getClientes();
        this.resetForm(form);
      });
    }
  }

  getClientes() {
    this.clienteService.getClientes().subscribe((res) => {
      this.clienteService.clientes = res;
    });
  }

  editCliente(cliente: Cliente) {
    this.clienteService.selectedCliente = cliente;
  }

  deleteCliente(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.clienteService.deleteCliente(_id).subscribe((res) => {
        this.getClientes();
        this.resetForm(form);
      });
    }
  }

  searchNombre() {
    if (this.nombre) {
      this.clienteService.findByNombre(this.nombre).subscribe((res) => {
          this.clienteService.clientes = res;
        },
        error => {
          console.log(error);
        });
    }else{
      this.getClientes();
    }
    
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.getClientes();
    }
  }
}
