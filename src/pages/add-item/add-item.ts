import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {UserInterfaceProvider} from '../../providers/user-interface/user-interface';
/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  _id: string;
  name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController,public userService : UserInterfaceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem(){
    let newItem = {
      name: this.name
    };
    return this.userService.addTask(newItem)
    .then(data => {
      this.view.dismiss(data['result']);
    })
    .catch(err=>{
      console.error(err);
    })
 
    
 
  }
 
  close(){
    this.view.dismiss();
  }

}
