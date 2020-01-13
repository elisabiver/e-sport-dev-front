import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  players: User[];

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private http: HttpClient) {
    this.players = [];
   }

  ngOnInit() {
    /* this.players = this.navParams.get('firstName'); */
    const url = `/api/player`;
    this.http.get<User[]>(url).subscribe(players => {
      console.log(`Player loaded`, players);
      this.players = players;
    });
  }
  
  closeModal(){
    this.modalController.dismiss();
  }

}
