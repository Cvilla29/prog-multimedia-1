import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {
  personas = [
    {
      nombre: 'Ana',
      apellido: 'Martinez',
      dni: '11111111f'
    },
    {
      nombre: 'Marcos',
      apellido: 'Sanchez',
      dni: '22222222y'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
