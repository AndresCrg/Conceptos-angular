import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './ejemplo1/personas/personas.component';
import { PersonaComponent } from './ejemplo1/persona/persona.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosModule } from './empleados/empleados.module';

@NgModule({
  declarations: [
    AppComponent, PersonasComponent, PersonaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    EmpleadosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
