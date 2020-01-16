import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/models/team';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SelectorMatcher } from '@angular/compiler';
import { CacheService } from 'src/app/services/cache-service.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.page.html',
  styleUrls: ['./teams-list.page.scss'],
})
export class TeamsListPage implements OnInit {
  teams: Array<Team> = [];


  // injecter le service pour le cache des teams
  constructor(private auth: AuthService, 
    public http: HttpClient, 
    private router: Router, 
    private route: ActivatedRoute, 
    private cache: CacheService<Team>) {
    this.teams = [];
  }

  ngOnInit() {
    const url = `/api/team`;
    this.http.get<Team[]>(url).subscribe(teams => {
      console.log(`Team loaded`, teams);
      this.teams = teams;
    });
  }

  goToCreateTeam() {
    this.router.navigateByUrl('home/create-team');
  }

  displayTeamByID(Team) {
    // ajouter la team dans le cache
    this.cache.setCache(Team);
    this.router.navigate(['home/welcome-team', Team._id]);
  }


  ionViewWillEnter(){
    const url = `/api/team`;
    this.http.get<Team[]>(url).subscribe(teams => {
      console.log(`Team loaded`, teams);
      this.teams = teams;
    });

  }


}
