//4. Import
import { Paginas2Page } from './../pagina2/paginas2';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //4. Prouedad de tipo pagina 2
  pag2 = Paginas2Page;
  constructor(public navCtrl: NavController) {

  }

}
