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
  lat:number = -33.4550356;
  lng:number = -70.6687078;

personas:any = [
  {age: 19, nombre: 'Jennifer'},
  {age: 19, nombre: 'Axel'},
  {age: 33, nombre: 'Richard'},
  {age: 36, nombre: 'Mirna'},
  {age: 15, nombre: 'Karla'},
];
  constructor(){
  }

}
