import { Injectable } from '@angular/core';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class CreateDBService {

  constructor(private sqlite: SQLite) { }

  createDB(){

  	//this.sqlite.echoTest();
 
  	this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => alert('Executed SQL'))
      .catch(e => alert(e));


  })
  .catch(e => alert(e));
 }

}
