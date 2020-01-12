import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-welcome-team',
  templateUrl: './welcome-team.page.html',
  styleUrls: ['./welcome-team.page.scss'],
})
export class WelcomeTeamPage implements OnInit {

  id: string;
  team: Team;

  constructor(private auth: AuthService, private route: ActivatedRoute, public http: HttpClient, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    const urlTeam = `api/team/${this.id}`;

    this.http.get<Team[]>(urlTeam).subscribe(result => {
      this.team = result[0];
    });

  }

  GoBack() {
    this.location.back();
  }

}
