import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray } from '@angular/forms';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/team.service';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from 'src/app/pages/modal/modal.page';
import { User } from 'src/app/models/user';
import { OverlayEventDetail } from '@ionic/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  teams: Team[];
  players: User[];
  datas: User[];

  constructor(private teamService: TeamService,
    private modalController: ModalController,
    private navController: NavController,
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private toastController: ToastController) {
    this.teams = [];
    this.players = [];
    this.datas = [];
  }

  ngOnInit() {

  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {

      }
    });
    modal.present();
    //console.log(await modal.onDidDismiss());
    await modal.onDidDismiss().then((datas: OverlayEventDetail) => {

      this.datas = datas.data;
      console.log(datas);
    });

  }

  async createTeam(form: NgForm) {
    let payload = {
      name: form.value.name,
      players: this.datas,
      logo: "http//photo",
    };
    this.teamService.createTeam(payload).subscribe(async () => {
      // toast in case of success
      const toastSuccess = await this.toastController.create({
        message: 'Your team has been created successfuly',
        duration: 4000,
        showCloseButton: true,
        color: 'dark'
      });
      toastSuccess.present();
      this,form.reset();
      this.datas.splice(0, this.datas.length)
      this.router.navigateByUrl('home/teams-list');

    }, async err => {

      const toastFail = await this.toastController.create({
        message: 'An error occured, Please try later',
        duration: 4000,
        showCloseButton: true,
        color: 'dark'
      });
      toastFail.present();

    });

    console.log("test");
    console.log(payload);
  }

  GoBack() {
    this.location.back();
  }



}


// afficher sur create-team tous les players sélectionnés
// limiter la sélection à x players
// faire le post sur la base de données
