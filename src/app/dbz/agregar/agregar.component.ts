import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

	@Input() personajes:Personaje[] = [];

	nuevo:Personaje = {
		nombre: "",
		poder: 0
	}

	@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

	constructor(
		private dbzServicio:DbzService
	) {}

	agregar() {
		if (this.nuevo.nombre.trim().length === 0) {
			return;
		}
		//console.log(this.nuevo);
		//this.personajes.push(this.nuevo);
		// Envio el nuevo personaje al componente padre (Main-page)
		this.onNuevoPersonaje.emit(this.nuevo);
		this.dbzServicio.agregarPersonaje(this.nuevo);
		this.nuevo = {
			nombre: "",
			poder: 0
		}
	}

}
