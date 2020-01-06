import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/models/team';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {

  teams: Team[];

  constructor(private auth: AuthService, public http: HttpClient) {
    this.teams = [];
  }

  ngOnInit() {
    const url = `/api/team`;
    this.http.get<Team[]>(url).subscribe(teams => {
      console.log(`Team loaded`, teams);
      this.teams = teams;
    });
  }

}
