import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Team } from 'src/app/models/team';
import { filter, map, tap } from 'rxjs/operators';
import { Tournament } from 'src/app/models/tournament';
import { WebsocketService } from 'src/websocket/websocket.service';

@Component({
  selector: 'app-welcome-player',
  templateUrl: './welcome-player.page.html',
  styleUrls: ['./welcome-player.page.scss'],
})
export class WelcomePlayerPage implements OnInit {
  player: User;
  teams: Team[];
  teamsOfPlayer: Team[];
  tournaments: Array<Tournament> = [];
  message: object;
  players: Array<User>;

  constructor(private auth: AuthService,
    private router: Router,
    private modalController: ModalController,
    private wsService: WebsocketService,
    public http: HttpClient) {
    this.teamsOfPlayer = [];
    this.teams = [];
    this.tournaments = [];

    this.wsService
    .listen()
    .subscribe((message: any) => {
      this.wsShow(JSON.parse(message));
    });
  }

  wsShow(message) {
    this.message = message;
  }

  ngOnInit() {
    const urlPlayer = `/api/player`;
    this.http.get<User[]>(urlPlayer).subscribe(player => {
      //console.log("test");
    })
    this.getCurrentUser();

    const urlTeam = `api/team`;
    const urlTournament = `api/tournament`;


    this.http.get<Tournament[]>(urlTournament).subscribe(tournaments => {
      this.tournaments = tournaments;  

        this.http.get<Team[]>(urlTeam).subscribe(teams => {
          this.teams = teams;  
          this.message = {

            "TotalTeam": this.teams.length,
            "TotalTournament": this.tournaments.length
          }
          console.log(this.message)
          this.wsShow(this.message);

        });
    });

  }

  ionViewWillEnter() {
    const urlTeam = `/api/team`;
    this.http.get<Team[]>(urlTeam).pipe(
      tap(console.log),
      map(teams => teams.filter(team => team.players.includes(this.player._id)))).subscribe(team => {

      this.teams = team;

      const urlTournament = `/api/tournament`;
      console.log(this.teams, "les teams avant ma fonction map")
      this.http.get<Tournament[]>(urlTournament).pipe(
        tap(console.log),
        map(tournaments => tournaments.filter(tournament => tournament.teams.includes(this.teams)))).subscribe(tournament => {
        this.tournaments = tournament;
        console.log(this.teams, "ha")
        console.log(this.tournaments, "tournaments")
      });
      console.log(this.teams, "teams de moi")
    });
  }

  getCurrentUser() {
    return this.auth.getUser().subscribe(res => {
      console.log(res);
      this.player = res;
    });
  }


  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
