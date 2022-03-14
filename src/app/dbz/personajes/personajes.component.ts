import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

	//@Input() person:any[] = [];

	constructor(
		private dbzServicio:DbzService
	) {}

	get person() {
		return this.dbzServicio.personajes;
	}

}
