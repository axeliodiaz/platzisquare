import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
      {active: true, nombre: 'Florería La Gardenia'},
      {active: true, nombre: 'Donas La Pasadita'},
      {active: true, nombre: 'Veterinaria Huellitas Felices'},
      {active: false, nombre: 'Sushi Sushiroll'},
      {active: true, nombre: 'Hotel La Gracia'},
      {active: true, nombre: 'Zapatería El Clavo'},
  ];

  constructor(){
  }

}
