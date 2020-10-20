import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  elementos = [
    {
      icono: 'ellipse-outline',
      ruta: '/pagina1',
      titulo: 'Pag1'
    },
    {
      icono: 'triangle-outline',
      ruta: '/pagina2',
      titulo: 'Pag2'
    }
  ];
  constructor() {}

}
