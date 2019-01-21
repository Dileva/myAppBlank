import { Injectable } from '@angular/core';

import { CreateDBService } from './create-db.service';


@Injectable({
  providedIn: 'root'
})
export class LoginDBService {

  constructor( private createDB:CreateDBService ) { }

  loginApp(){
  	this.createDB.createDB();

  }


}
