import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  lugares:any = [
      {nombre: 'Florería La Gardenia'},
      {nombre: 'Donas La Pasadita'},
      {nombre: 'Veterinaria Huellitas Felices'},
  ];

  constructor(){
  }

}
