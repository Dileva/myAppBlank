import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { LoginDBService } from '../services/login-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private router:Router, private loginDB:LoginDBService ) { }

  doLogin(){

  	this.loginDB.loginApp();
  	//this.router.navigate(['/special']);
  }

  ngOnInit() {
  }

}
