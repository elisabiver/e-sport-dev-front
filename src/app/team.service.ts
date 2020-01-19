import { Injectable } from '@angular/core';
import { Team } from './models/team';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teams: Team[];

  constructor(private http: HttpClient) {
    this.teams = [];
   }

   createTeam(payload: object){
     const teamUrl = `api/team`;
     return this.http.post(teamUrl, payload);
   }
}
