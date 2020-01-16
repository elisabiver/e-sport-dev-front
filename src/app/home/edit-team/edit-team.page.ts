import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { Team } from 'src/app/models/team';
import { ModalPage } from 'src/app/pages/modal/modal.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.page.html',
  styleUrls: ['./edit-team.page.scss'],
})
export class EditTeamPage implements OnInit {

  teams: Team[];
  players: User[];
  datas: User[];

  constructor(private modalController: ModalController) { }

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

  updateTeam(){
      
  }
}
