import { Component, Output } from '@angular/core';
import { Persona } from '../../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  personas: Persona[] = [new Persona('JuAn', 'LoPeZ', 80, 'M', new Date ("2022-03-25")), new Persona('StEveN', 'VeLaNdIa', 20, 'M', new Date("2002-07-28")), new Persona('SaRa', 'NIeTo', 8, 'F', new Date("1960-03-25"))]

}
