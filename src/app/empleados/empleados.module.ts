import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { MisEmpleadosComponent } from './mis-empleados/mis-empleados.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [MainPageComponent, MisEmpleadosComponent, AgregarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class EmpleadosModule { }
