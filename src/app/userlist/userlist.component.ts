import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

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
    }, error=>console.log("Error in fetching data"))

    this.userservice.getUsersPromise().then(users=>{
      this.userList = users;
    }).catch(err=>console.log('err'));
  }

  addUser() {
    this.userservice.addUser({name:'Rajat Agarwal', email:'rajat@gmail.com'}).subscribe(respone=>{
      //Give any alert message to the endUser
    })
  }

}
