import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginDBService {

	//password:string = '';
	_ok:boolean;

  constructor( private storage: Storage ) { }

  async loginApp( password: String):Promise<boolean> {
  	/**** comprueba la contraseña ****/

//  	console.log(password);


  //  await this.storage.set('password', '123');
	let val = await this.storage.get('password');
	//console.log(await this.storage.length());
	//console.log(val);
	if (password === val) {
	  this.storage.set('logged', true);
	  return this._ok = true;
	}else{
      return this._ok = false;
	}


	/*.then((val) => {

		if (password === val) {
			  this._ok = true;
		}
		   	      this._ok = false;
	   });
*/

/*    this.storage.set('password', this.password).then(() => {
	   
	   this.storage.get('password').then((val) => {
	   	  console.log('Your password is', val);
	   });

	});*/

	  // Or to get a key/value pair
  }

  async isLogged(){
  	/**** comprueba si esta logeado****/
  	let isLogged:boolean = await this.storage.get('logged');
  	return isLogged;
  }

  async existPassword(){

  	let password = this.storage.get('password');

  	if (password === null) {
  		return false;
  	}

  	return true;

  }

  setPassword(){
  	this.storage.set('password', '123');
  }

}
