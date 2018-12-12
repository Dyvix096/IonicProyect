import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Paginas2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paginas2',
  templateUrl: 'paginas2.html',
})
export class Paginas2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // 7. Crear metodo que atiende al evento
  ir_pagina3(){
    //7. Invocado el nombre que aparece en pagina3.module.ts
    //  this.navCtrl.push("Pagina3Page"); 
  //8. Otra forma de referenciarla por el name de @IonicPage en Pagina3.ts
  this.navCtrl.push("mi-pagina3");
  }
  
  ir_pagina4(){
    this.navCtrl.push("mi-pagina4");
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");
    // Dejamos salir despues de 2 segundos
    let promesa = new Promise((resolv,reject) =>{
      setTimeout(() =>{
      resolv(true);
      },2000);
    });
    return promesa;

    //sintaxis alternativa return new promesa...
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");
  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave");
    // Entrar de forma aleatoria
    let numero = Math.round(Math.random()*10);
    console.log(numero);
    if(numero >= 3){
    return true;
    }else{
      return false;
    }
  }

}