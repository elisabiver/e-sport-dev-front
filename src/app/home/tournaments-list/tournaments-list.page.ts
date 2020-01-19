import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Tournament } from 'src/app/models/tournament';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.page.html',
  styleUrls: ['./tournaments-list.page.scss'],
})
export class TournamentsListPage implements OnInit {
  tournaments: Array<Tournament> = [];

  constructor(public http: HttpClient, private router: Router) {
    this.tournaments = [];
  }

  ngOnInit() {
    const url = `/api/tournament`;
    this.http.get<Tournament[]>(url).subscribe(tournaments => {
      console.log(`Tournament loaded`, tournaments);
      this.tournaments = tournaments;
    });
  }

  // ngOnInit() {
  //   const url = `/api/team`;
  //   this.http.get<Team[]>(url).subscribe(teams => {
  //     console.log(`Team loaded`, teams);
  //     this.teams = teams;
  //   });
  // }


  ionViewWillEnter(){
    
    const url = `/api/tournament`;
    this.http.get<Tournament[]>(url).subscribe(tournaments => {
      console.log(`Tournament loaded`, tournaments);
      this.tournaments = tournaments;
    });

  }



  GoToCreateTournament() {
    this.router.navigateByUrl('home/create-tournament');
  }

  DisplayTournamentByID(Tournament) {
    // ajouter le tournament dans le cache
   // this.tournament.SetCache();
    this.router.navigate(['home/welcome-tournament', Tournament._id]);
  }

}
