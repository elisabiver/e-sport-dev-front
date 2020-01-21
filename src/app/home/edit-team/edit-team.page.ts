import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { Team } from 'src/app/models/team';
import { ModalPage } from 'src/app/pages/modal/modal.page';
import { OverlayEventDetail } from '@ionic/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.page.html',
  styleUrls: ['./edit-team.page.scss'],
})
export class EditTeamPage implements OnInit {

  teams: Team[];
  players: User[];
  datas: User[];
  id: string;
  team: Team;
  newName: string;

  constructor(private modalController: ModalController,
              private router: Router,
              public http: HttpClient,
              private toastController: ToastController,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
 
    const urlTeam = `${environment.apiUrl}/team/${this.id}`;
    //const urlTeam = `api/team/${this.id}`;

    this.http.get<Team>(urlTeam).subscribe(result => {
      this.team = result;
    });

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


  updateTeam(updateTeamForm: NgForm) :void{
    this.validEditTeam(updateTeamForm);

    const updateUrl = `api/team/${this.id}`;
    
    let patchObject = {
      name: updateTeamForm.value.name,
      players: this.datas,
      logo: "http//photo",
    }

    this.http.patch(updateUrl, patchObject).subscribe(async() => {

      const toastSuccess = await this.toastController.create({
        message: 'Your team has been edited successfuly',
        duration: 4000,
        showCloseButton: true,
        color: 'dark'
      });
      toastSuccess.present();
      this.router.navigate(["home/teams-list"]);
      

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
    this.router.navigate(["home/teams-list"]);
  }

  validEditTeam(form: NgForm){
    if(form.valid){
      console.log("the team is valid")
    }
  }

}
