import { LISTTODO } from './../../mocks/add.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  
  listtodo= LISTTODO;
  variable;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.variable=this.navParams.get("variable");
    this.listtodo.push({item:this.variable})
    
    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }
  onlist(){
    this.navCtrl.push("ThirdPage");
  }

}
