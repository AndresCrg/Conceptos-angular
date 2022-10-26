import { Component } from '@angular/core';
import { Empleado } from '../interfaces/empleados.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // i18nSelect
  nombre: string = 'Andres';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  cambiarCliente() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Eduardo', 'Fernando'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  borrarCliente() {
    this.clientes.pop();
  }

  empleados: Empleado[] = [
    {
      nombre: 'Angie Ortiz',
      salario: 2000000,
      fechaContratacion: new Date(Date.now()),
    },
    {
      nombre: 'Andres Cardenas',
      salario: 2580000,
      fechaContratacion: new Date(Date.now()),
    },
    {
      nombre: 'Karen Sanchez',
      salario: 2490000,
      fechaContratacion: new Date(Date.now()),
    },
  ];

  nuevo: Empleado = {
    nombre: '',
    salario: 0,
    fechaContratacion: new Date(Date.now()),
  };

  agregarNuevoEmpleado(argumento: Empleado) {
    this.empleados.push(argumento);
  }
}
