import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { TournamentService } from 'src/app/tournament.service'
import { HttpClient } from '@angular/common/http';
import { Tournament } from 'src/app/models/tournament';
import { Geolocation } from '@ionic-native/geolocation/ngx'


@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.page.html',
  styleUrls: ['./create-tournament.page.scss'],
})
export class CreateTournamentPage implements OnInit {

  tournaments: Tournament[];
  
  constructor(private tournamentService: TournamentService, 
    private http: HttpClient,
    private geolocation: Geolocation
    ) {
    this.tournaments = [];
   }

  ngOnInit() {

  }

  createTournament(form: NgForm){
    let payload = {
      "name": form.value.name,
      "location": {
        "type": form.value.adress, //ca marche pas --> erreur 500 /* form.controls['adress'].value, */
        "coordinates": form.value.coordinates /* form.controls['coordinates'].value */
      },
      "teams": form.value.teams,
    };

    this.tournamentService.createTournament(payload).subscribe();
    console.log("test");
  }
}
