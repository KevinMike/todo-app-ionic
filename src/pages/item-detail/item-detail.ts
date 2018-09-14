import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {UserInterfaceProvider} from '../../providers/user-interface/user-interface';
import { Events } from 'ionic-angular'

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  _id:string;
  name:string;
  callback:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService : UserInterfaceProvider,public view: ViewController,public events: Events) {
  }

  ionViewDidLoad() {
    this._id = this.navParams.get('item')._id;
    this.name = this.navParams.get('item').name;
  }

  deleteItem(){
    return this.userService.deleteTask(this._id)
    .then(data => {
      this.events.publish('update:list',{_id: this._id, name: this.name});
      this.navCtrl.pop();
    })
    .catch(err=>{
      console.error(err);
    });
    
  }

}
