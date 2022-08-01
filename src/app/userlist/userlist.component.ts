import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  userList: any ;
  constructor(private userservice:UserService) { 
  }

  ngOnInit(): void { 
    this.userservice.getUsers().subscribe(users=>{
      this.userList = users;
    })
  }

  // Ajax call in a service ?

}
