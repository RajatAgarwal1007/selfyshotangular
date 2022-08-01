import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subject = new Subject<string>(); //1. Define the Subject

  constructor() { }

  setUsername(username:string) { // called by LoginComponent
    // Add it to the subject -- strean of values
    this.subject.next(username); //2. add to subject
  }
  getUsername():Observable<string> { //called by headerConponent
    return this.subject.asObservable(); // 3. return observable 
  }
}
