import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// Injecting a service within a service

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]> {
    // Ajax call to fetch the list of users
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  getUsersPromise():Promise<any> {
    // Ajax call to fetch the list of users
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users').toPromise();
  }

  getUser(id:number):Observable<User> {
    // Ajax call to fetch the list of users
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users'+id);
  }

  addUser(userObj:any):Observable<any> {
    return this.http.post('http://jsonplaceholder.typicode.com/users', userObj);
  }

  
}
