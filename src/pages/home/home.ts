import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import {ItemDetailPage} from '../item-detail/item-detail';
import {UserInterfaceProvider} from '../../providers/user-interface/user-interface'
import { Events } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items;

  constructor(public navCtrl: NavController, public modalCtrl : ModalController, public userService : UserInterfaceProvider,public events: Events) {
    events.subscribe('update:list',value=>{      
      this.items = this.items.filter(function(ele){
        return (ele._id != value._id);
      });
    })
  }

  ionViewDidLoad(){
    
    return this.userService.getTask()
    .then(data=>{
      this.items = data;
    })
    .catch(err=>{
      console.error(err);
    })
  }
 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
  }
 
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });    
  }

}
