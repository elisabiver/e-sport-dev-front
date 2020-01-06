import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, from } from 'rxjs';
import { delayWhen, map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';


import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';
import { AuthRequest } from '../models/auth-request';

import { environment } from 'src/environments/environment';



/**
 * Authentication service for login/logout.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {

  private auth$: Observable<AuthResponse>;
  private authSource: ReplaySubject<AuthResponse>;

  constructor(private http: HttpClient, private storage: Storage) {
    this.authSource = new ReplaySubject(1);
    //this.authSource.next(undefined);
    this.auth$ = this.authSource.asObservable();
    this.storage.get('auth').then(auth => {
      this.authSource.next(auth);
    });
  }

  isAuthenticated(): Observable<boolean> {
    return this.auth$.pipe(map(auth => Boolean(auth)));
  }

  getUser(): Observable<User> {
    return this.auth$.pipe(map(auth => auth ? auth.user : undefined));
  }

  getToken(): Observable<string> {
    return this.auth$.pipe(map(auth => auth ? auth.token : undefined));
  }

  logIn(authRequest: AuthRequest): Observable<User> {

    const authUrl = `api/player/login`;
    return this.http.post<AuthResponse>(authUrl, authRequest).pipe(
      delayWhen(auth => {
        return this.saveAuth(auth);
      }),
      map(auth => {
        this.authSource.next(auth);
        console.log(`User ${auth.user.pseudo} logged in`);
        return auth.user;
      })
    );
  }

  logOut() {
    this.authSource.next(null);
    this.storage.remove('auth');
    console.log('Player logged out');
  }

  register(firstName: String, lastName: String, pseudo: String, birthDate: Date, email: String, password: String) {
    let payload = {
      "firstName": firstName,
      "lastName": lastName,
      "pseudo": pseudo,
      "password": password,
      "birthDate": birthDate,
      "picture": "https://nlakakak",
      "gender": "male"
    };
    const authUrl = `api/player`;
    return this.http.post(authUrl, payload);
  }


  private saveAuth(auth: AuthResponse): Observable<void> {
    return from(this.storage.set('auth', auth));
  }

}