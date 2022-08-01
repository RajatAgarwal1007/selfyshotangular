import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username:string = "Guest"; // set by the login component
  constructor(private auth:AuthService) { }

  ngOnInit(): void { // 4. subscribe to the Observable
    this.auth.getUsername().subscribe(newusername=>{
      this.username = newusername;
    })
  }

}
