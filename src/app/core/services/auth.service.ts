import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Auth } from 'src/app/models/auth';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  sesionSubject!: BehaviorSubject<Auth>
  constructor() { 
    const auth: Auth = {
      auth: false
    };
    this.sesionSubject = new BehaviorSubject(auth);
  }

  startSesion(user: User){
    const sesion: Auth = {
      auth: true,
      user: {
        user: user.user,
        password: user.password
      }
    };
    this.sesionSubject.next(sesion);
  }

  endSesion(){
    const sesion: Auth = {
      auth: false
    };
    this.sesionSubject.next(sesion);
  }

  getSesion(){
    return this.sesionSubject.asObservable();
  }
}
