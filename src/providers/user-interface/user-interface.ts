import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserInterfaceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserInterfaceProvider {

  private uri = 'https://todo-app-kevinmike.herokuapp.com/task'
  constructor(public http: HttpClient) {
    console.log('Hello UserInterfaceProvider Provider');
  }

  getTask(){
    return new Promise(resolve => {
      this.http.get(this.uri).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });    
  }

  addTask(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.uri, JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteTask(_id){
    return new Promise((resolve, reject) => {
      this.http.delete(this.uri+_id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
