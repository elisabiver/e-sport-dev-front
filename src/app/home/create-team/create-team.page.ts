import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray } from '@angular/forms';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/team.service';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from 'src/app/pages/modal/modal.page';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.page.html',
  styleUrls: ['./create-team.page.scss'],
})
export class CreateTeamPage implements OnInit {

  teams: Team[];
  players: User[];

  constructor(private teamService: TeamService,
    private modalController: ModalController,
    private navController: NavController) {
    this.teams = [];
    this.players = [];
   }

  ngOnInit() {
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {

      }
    });
    modal.present();
    console.log(await modal.onDidDismiss());
    const datas  = await modal.onDidDismiss();
    console.log(datas);
    //this.players = 
  }

  createTeam(form: NgForm){
    let payload = {
      "name": form.value.name,
      "players": [form.value.player],
      "logo": "http//photo",
    };
    this.teamService.createTeam(payload).subscribe();
    console.log("test");
    console.log(payload);
  }

}


// afficher sur create-team tous les players sélectionnés
// limiter la sélection à x players
// faire le post sur la base de données
