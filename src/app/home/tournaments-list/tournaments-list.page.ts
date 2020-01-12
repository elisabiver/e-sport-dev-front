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

  tournaments: Tournament[];

  constructor(private auth: AuthService, public http: HttpClient, private router: Router) {
    this.tournaments = [];
  }

  ngOnInit() {
    const url = `/api/tournament`;
    this.http.get<Tournament[]>(url).subscribe(tournaments => {
      console.log(`Tournament loaded`, tournaments);
      this.tournaments = tournaments;
    });
  }

  GoToCreateTournament() {
    this.router.navigateByUrl('home/create-tournament');
  }

}
