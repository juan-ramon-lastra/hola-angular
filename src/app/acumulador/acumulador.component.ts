import { Component } from "@angular/core";

@Component({
  selector: 'app-acumulador',
  templateUrl: './acumulador.component.html'

})
export class AcumuladorComponent {
  title = 'Contador';

  numero:number = 10;
  base:number = 25;

  acumulador(n:number):void {
    this.numero += n;
  }
}
