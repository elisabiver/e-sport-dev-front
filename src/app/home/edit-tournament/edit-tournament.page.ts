import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, ToastController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Tournament } from 'src/app/models/tournament';
import { Team } from 'src/app/models/team';
import { Location } from '@angular/common';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { TournamentService } from 'src/app/tournament.service';
import { ModalTPage } from 'src/app/pages/modal-t/modal-t.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.page.html',
  styleUrls: ['./edit-tournament.page.scss'],
})

export class EditTournamentPage implements OnInit {


  tournaments: Tournament[];
  c: Coordinates;
  datas: [];
  teams: Team[];
  id: string;
  name: String;
  latitude: number;
  longitude: number;

  constructor(
    private tournamentService: TournamentService,
    private http: HttpClient,
    private modalController: ModalController,
    private navController: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private toastController: ToastController,
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

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  async openModalTournament() {
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


  updateTournament(form: NgForm): void {
    var long = 0;
    var lat = 0;
    if (form.value.latitude === null) {
      long = this.c.latitude
    } else {
      long = form.value.latitude
    }

    if (form.value.longitude == null) {
      long = this.c.longitude
    } else {
      long = form.value.longitude
    }

    const updateUrl = `api/tournament/${this.id}`;

    let patchObject = {
      location: {
        type: "Point",
        coordinates: [lat, long]
      },
      teams: this.datas,
      name: form.value.name,
      // {
      //   "location": {
      //     "type": "Point",
      //     "coordinates": [
      //         -73.856077,
      //         40.848447
      //     ] 
      // },

    };


    this.http.patch(updateUrl, patchObject).subscribe(async () => {


      // toast in case of success
      const toastSuccess = await this.toastController.create({
        message: 'The tournament has been edited successfuly',
        duration: 4000,
        showCloseButton: true,
        color: 'dark'
      });
      toastSuccess.present();
      form.reset();
      this.datas.splice(0, this.datas.length)
      this.router.navigate(["home/tournement-list"]);


    }, async err => {

      const toastFail = await this.toastController.create({
        message: 'An error occured, Please try later',
        duration: 4000,
        showCloseButton: true,
        color: 'dark'
      });
      toastFail.present();

    });


  }


  GoBack() {
    this.location.back();
  }

}
