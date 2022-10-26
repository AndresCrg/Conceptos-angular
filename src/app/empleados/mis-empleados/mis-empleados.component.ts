import { Component, Input} from '@angular/core';
import { Empleado } from '../interfaces/empleados.interface';

@Component({
  selector: 'app-mis-empleados',
  templateUrl: './mis-empleados.component.html',
  styleUrls: ['./mis-empleados.component.css']
})
export class MisEmpleadosComponent {

  @Input('empleadosHijo') empleados:Empleado[] = []
}
