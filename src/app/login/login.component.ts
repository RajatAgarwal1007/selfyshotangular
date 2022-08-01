import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ="guest";
  password:string = "guest";

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  authenticate() {
    
  }

  login() {
    //check for authentication with server side
    this.auth.setUsername(this.username);
  }

}
