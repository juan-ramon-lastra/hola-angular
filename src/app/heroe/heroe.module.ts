import { NgModule } from "@angular/core";
import { ListadoComponent } from "./listado/listado.component";
import { HeroesComponent } from "./heroes/heroe.component";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [
		HeroesComponent,
    	ListadoComponent
	],
	exports: [ // Todo lo que se quiere ver en el modulo principal
		ListadoComponent,
		HeroesComponent
	],
	imports: [
		CommonModule // Para poder ejecutar las directivas (ngFor, ngIf, ...)
	]
})
export class HeroesModule {}
