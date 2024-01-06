import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = new FormControl();
  password = new FormControl();

  constructor(private auth:AuthService){}

  doLogin(){
    var user = this.username.value;
    var pass = this.password.value;    

    this.auth.login(user, pass);
  }


}
