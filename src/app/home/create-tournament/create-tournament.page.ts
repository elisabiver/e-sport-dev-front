import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { TournamentService } from 'src/app/tournament.service'
import { HttpClient } from '@angular/common/http';
import { Tournament } from 'src/app/models/tournament';
import { ModalController, NavController } from '@ionic/angular';
import { ModalTPage } from 'src/app/pages/modal-t/modal-t.page';
import {OverlayEventDetail} from '@ionic/core';
import { Team } from 'src/app/models/team';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { empty } from 'rxjs';


@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.page.html',
  styleUrls: ['./create-tournament.page.scss'],
})
export class CreateTournamentPage implements OnInit {

  tournaments: Tournament[];
  c: Coordinates;
  datas:[];
  teams: Team[];
  
  constructor(
    private tournamentService: TournamentService, 
    private http: HttpClient,
    private modalController: ModalController,
    private navController: NavController,
    private router: Router, 
    private geolocation: Geolocation) {
      
    this.tournaments = [];
    this.datas = [];
    this.teams = [];
   }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((position: Geoposition) => {
      this.c = position.coords;
      // console.log(this.c.latitude, this.c.longitude);
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    }); 
  }

  async openModalTournament(){
    const modal = await this.modalController.create({
      component: ModalTPage,
      componentProps: {

      }
    });
    modal.present();
    //console.log(await modal.onDidDismiss());
    await modal.onDidDismiss().then((datas: OverlayEventDetail) => {
      
      this.datas = datas.data; 
      console.log(this.datas);
    });
  }
    
  createTournament(form: NgForm){
    var long = 0;
    var lat = 0;
    if(form.value.latitude === null){
        long = this.c.latitude 
    }else{
        long = form.value.latitude
    }

    if(form.value.longitude == null){
      long = this.c.longitude 
    }else{
      long = form.value.longitude
    }
    
    let payload = {
      location : {
        type : "Point",
        coordinates : [lat , long]
      },
      teams: this.datas,
      name : form.value.name,
      // {
      //   "location": {
      //     "type": "Point",
      //     "coordinates": [
      //         -73.856077,
      //         40.848447
      //     ] 
      // },
     
  };

    
  this.tournamentService.createTournament(payload).subscribe();
  this.router.navigateByUrl('home/tournament-list');

    
  }
} 