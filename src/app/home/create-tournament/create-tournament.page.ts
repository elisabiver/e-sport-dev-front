import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { TournamentService } from 'src/app/tournament.service'
import { HttpClient } from '@angular/common/http';
import { Tournament } from 'src/app/models/tournament';


@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.page.html',
  styleUrls: ['./create-tournament.page.scss'],
})
export class CreateTournamentPage implements OnInit {

  tournaments: Tournament[];
  
  constructor(private tournamentService: TournamentService, public http: HttpClient) {
    this.tournaments = [];
   }

  ngOnInit() {
  }

  createTournament(form: NgForm){
    console.log(form);
    this.tournamentService.createTournament(form.value).subscribe();
    console.log("test")
  }
}
