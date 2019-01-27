import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { LoginDBService } from '../services/login-db.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	password:string = '';

  constructor( private router:Router, private loginDB:LoginDBService ) {

    /**** comprueba si esta logeado, si es asi redirige a la pagina home ****/
    let isLogged = this.loginDB.isLogged();

    if (isLogged) {
      this.router.navigate(['/inventory']);
    }

   }

 async doLogin(){

/**** comprueba la contraseña y redirige a la pagina home****/
 // this.loginDB.password = this.password;
 let valid:boolean = await this.loginDB.loginApp( this.password );

 if (valid === true) {
   this.router.navigate(['/inventory']);
 }
 //console.log(valid);
  //	console.log(this.loginDB.loginApp());
  	//this.router.navigate(['/special']);
  }

  ngOnInit() {

    this.loginDB.existPassword().then((exist) => {

      if (exist === false) {
        this.loginDB.setPassword();
      }

    });

  }

}
