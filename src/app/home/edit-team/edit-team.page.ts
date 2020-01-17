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

  constructor(private modalController: ModalController,
              private router: Router,
              public http: HttpClient,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
 
    const urlTeam = `api/team/${this.id}`;

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

    const updateUrl = `api/team/${this.id}`;
    
    let patchObject = {
      name: updateTeamForm.value.name,
      players: this.datas,
      logo: "http//photo",
    }

    this.http.patch(updateUrl, patchObject).subscribe(res => {
      this.router.navigate(["home/welcome-team", this.id]);
    });
  }

  GoBack() {
    this.location.back();
  }


}
