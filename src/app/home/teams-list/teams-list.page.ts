import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/models/team';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {
  teams: Array<Team> = [];
  

  constructor(private auth: AuthService, public http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.teams = [];
  }

  ngOnInit() {
    const url = `/api/team`;
    this.http.get<Team[]>(url).subscribe(teams => {
      console.log(`Team loaded`, teams);
      this.teams = teams;
    });
  }

  GoToCreateTeam() {
    this.router.navigateByUrl('home/create-team');
  }

  DisplayTeamByID(Team) {
    this.router.navigate(['home/welcome-team', Team._id]);
  }

}
