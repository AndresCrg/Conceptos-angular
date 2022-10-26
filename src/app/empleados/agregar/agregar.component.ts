import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../interfaces/empleados.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() nuevo: Empleado = {
    nombre:'',
    salario:0,
    fechaContratacion: new Date(Date.now())
  }

  @Output() onNuevoEmpleado: EventEmitter<Empleado> = new EventEmitter();

  agregar(){
    if (this.nuevo.nombre.trim().length == 0) {
      return;
    }
    
    console.log(this.nuevo);

    this.onNuevoEmpleado.emit(this.nuevo);

    this.nuevo = {
      nombre:'',
      salario:0,
      fechaContratacion: new Date(Date.now())
    }
  }
}
