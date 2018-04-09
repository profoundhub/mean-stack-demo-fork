import { Http } from '@angular/http';
import { User } from './user';
import { Injectable } from '@angular/core';
// import 'rxjs';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  create(user: User) {
    return this._http.post('/users', user).toPromise();
  }

  destroy(user: User) {
<<<<<<< HEAD
    return this._http.delete('/users' + user._id).toPromise();
=======
    return this._http.delete('/users' + user.id).toPromise();
>>>>>>> 9aa19f6ae7be26ba7264a84d2983749afe234a6e
  }

  update(user: User) {
    return this._http.put('/users' + user._id, user).toPromise();
  }

  // getUsers(): Observable<User> {
  //   return
  // }

  getUser() {
    return this._http.get('/users').toPromise();
  }

  getUsers(user: User) {
    return this._http.get('/users' + user._id).toPromise();
  }

}
