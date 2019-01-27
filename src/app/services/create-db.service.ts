import { Injectable } from '@angular/core';

import { Storage } from '@ionic/Storage';

import { SQLite } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class CreateDBService {

  constructor(private storage: Storage) { }

  createDB(){

  	 // set a key/value
    this.storage.set('name', 'Max');

	  // Or to get a key/value pair
	this.storage.get('age').then((val) => {
	   console.log('Your age is', val);
	});

  }


}
