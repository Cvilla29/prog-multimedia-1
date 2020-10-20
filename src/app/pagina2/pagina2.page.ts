import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
  abrirYoutube(){
    window.open('https://www.youtube.com/');
  }
  async presentToast(message: string ) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

}
