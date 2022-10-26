import { Component } from '@angular/core';
import { Empleado } from '../interfaces/empleados.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  empleados:Empleado[] = [
    {
      nombre:'Angie Ortiz',
      salario:2000000,
      fechaContratacion:new Date(Date.now())
    },
    {
      nombre:'Andres Cardenas',
      salario:2580000,
      fechaContratacion:new Date(Date.now())
    },
    {
      nombre:'Karen Sanchez',
      salario:2490000,
      fechaContratacion:new Date(Date.now())
    },
  ]

  nuevo: Empleado = {
    nombre:'',
    salario:0,
    fechaContratacion: new Date(Date.now())
  }

  agregarNuevoEmpleado(argumento:Empleado){
    this.empleados.push(argumento);
  }
  
}
