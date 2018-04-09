import { Http } from '@angular/http';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  create(user: User) {
    return this._http.post('/users', user).toPromise();
  }

  destroy(user: User) {

  }

  update(user: User) {

  }

  // getUsers(): Observable<User> {
  //   return
  // }

  getUser() {
    //   return
  }

  getUsers() {
    //   return
  }

}
