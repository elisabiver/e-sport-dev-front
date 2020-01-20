import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  urele: string;
  users: User[];

  constructor(private http: HttpClient, private storage: Storage) {
    this.users = [];
   }

  updateUser(payload: object, url: string) {
    this.urele = url;
    const userUrl = `api/player/` + this.urele;
    return this.http.patch(userUrl, payload);
/*     const tournamentUrl = `api/tournament`;
    return this.http.post<Tournament[]>(tournamentUrl, payload).subscribe(tournaments =>{
      console.log(`Tournament created`, tournaments);
      this.tournaments = tournaments; */
  }
}
