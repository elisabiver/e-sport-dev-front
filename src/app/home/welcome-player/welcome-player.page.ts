import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Team } from 'src/app/models/team';
import { filter, map, tap } from 'rxjs/operators';
import { Tournament } from 'src/app/models/tournament';
import { Camera, CameraOptions  } from '@ionic-native/camera/ngx';
import { QimgImage } from '../../models/qimg-image';
import { PictureService } from '../../services/picture/picture.service';
import { PlayerService } from 'src/app/services/player.service'

@Component({
  selector: 'app-welcome-player',
  templateUrl: './welcome-player.page.html',
  styleUrls: ['./welcome-player.page.scss'],
})
export class WelcomePlayerPage implements OnInit {
  player: User;
  teams: Team[];
  teamsOfPlayer: Team[];
  tournaments: Tournament[];
  pictureData: string;
  picture: QimgImage;

  constructor(private auth: AuthService,
    private router: Router,
    private modalController: ModalController,
    private camera: Camera,
    private pictureService: PictureService,
    public http: HttpClient,
    private playerService: PlayerService) {
    this.teamsOfPlayer = [];
    this.teams = [];
    this.tournaments = [];
    
  }

  ngOnInit() {
    const urlPlayer = `/api/player`;
    this.http.get<User[]>(urlPlayer).subscribe(player => {
      //console.log("test");
    })
    this.getCurrentUser();

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
      // console.log(res);
      this.player = res;
    });
  }

  takePicture() {
    this.pictureService.takeAndUploadPicture().subscribe(picture => {
      this.picture = picture;
      console.log(picture.url)
    }, err => {
      console.warn('Could not take picture', err);
    });
    // this.modifyUserPicture();


  }

  modifyUserPicture(){
   var url =  `api/player/${this.player._id}`;
    //envoyer url et id à notre API
    //modifier le player actuel avec la nouvelle url
    // PATCH /api/player/this.player._id HTTP/1.1
    // Content-Type: application/json
      
      // let payload = {
      //     picture: this.picture.url,
      //     headers: new HttpHeaders{
      //     Content-Type: 'application/json',
      //     Authorization: Bearer ${this.auth.getToken()["source"]["source"]["_events"][0].token}
      //   }
      // };
      
    // this.http.patch(url, payload).subscribe();
  }

  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }
}
