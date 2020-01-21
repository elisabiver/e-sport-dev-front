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
import { WebsocketService } from 'src/websocket/websocket.service';
import { Camera, CameraOptions  } from '@ionic-native/camera/ngx';
import { QimgImage } from '../../models/qimg-image';
import { PictureService } from '../../services/picture/picture.service';
import { PlayerService } from 'src/app/services/player.service';
import { CacheService } from 'src/app/services/cache-service.service';



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
  pictureData: string;
  picture: QimgImage;


  constructor(private auth: AuthService,
    private router: Router,
    private wsService: WebsocketService,
    private camera: Camera,
    private cache: CacheService<Team>,
    private pictureService: PictureService,
    public http: HttpClient,
    private playerService: PlayerService) {
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
    //const urlPlayer = `${environment.apiUrl}/player`;
    const urlPlayer = `/api/player`
    this.http.get<User[]>(urlPlayer).subscribe(player => {
      //console.log("test");
    })
    this.getCurrentUser();

    //const urlTeam = `${environment.apiUrl}/team`;
    const urlTeam = `/api/team`
    //const urlTournament = `${environment.apiUrl}/tournament`;
    const urlTournament = `/api/tournament`


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
    });
  }

  getCurrentUser() {
    return this.auth.getUser().subscribe(res => {
      this.player = res;
    });
  }

  takePicture() {
    this.pictureService.takeAndUploadPicture().subscribe(picture => {
      this.picture = picture;
    }, err => {
      console.warn('Could not take picture', err);
    });

    let url =  `api/player/${this.player._id}`;
      let payload = {
          picture: this.picture.url,
          // picture: "https://comem-qimg.herokuapp.com/images/6123c634-6a63-43c2-a17d-37f3b8e9a614.png",
          // headers: new HttpHeaders{
          // Content-Type: 'application/json',
          // Authorization: Bearer ${this.auth.getToken()["source"]["source"]["_events"][0].token}
      };
      this.http.patch(url, payload).subscribe();
  }

  modifyUserPicture(){
   
  }

  logOut() {
    console.log('logging out...');
    this.auth.logOut();
    this.router.navigateByUrl('/login');
  }

  displayTeamByID(Team){
    
    this.cache.setCache(Team);
    this.router.navigate(['home/welcome-team', Team._id]);
  }
}
