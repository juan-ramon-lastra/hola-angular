import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman','Ironman','Thor','Hulk','Capitan America','Antman'];
  heroesDeleted:string[] = [];
  heroeDeleted:string = "";

  borrarHeroe():void {
    this.heroeDeleted = this.heroes.pop()!; // borra el primer elemento
    //let heroe = this.heroes.pop(); // borra el ultimo elemento
    //alert("Has borrado a " + this.heroeDeleted);
    this.heroesDeleted.push(this.heroeDeleted);
  }

}
