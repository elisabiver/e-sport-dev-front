import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Team } from 'src/app/models/team';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-welcome-player',
  templateUrl: './welcome-player.page.html',
  styleUrls: ['./welcome-player.page.scss'],
})
export class WelcomePlayerPage implements OnInit {
  player: User;
  teams: Team[];
  teamsOfPlayer: Team[];

  constructor(private auth: AuthService,
    private router: Router,
    private modalController: ModalController,
    public http: HttpClient) {
    this.teamsOfPlayer = [];
    this.teams = [];
  }

  ngOnInit() {
    const urlPlayer = `/api/player`;
    this.http.get<User[]>(urlPlayer).subscribe(player => {
      //console.log("test");
    })
    this.getCurrentUser();

    const urlTeam = `/api/team`;
    this.http.get<Team[]>(urlTeam).pipe(
      tap(console.log),
      map(teams => teams.filter(team => team.players.includes(this.player._id)))
      ).subscribe(team => {
      this.teams = team;
      console.log(this.teams)
    })

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
