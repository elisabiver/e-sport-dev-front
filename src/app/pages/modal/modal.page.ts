import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  players: User[];
  selectedPlayers: User[];

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private http: HttpClient,
    private router: Router) {
    this.players = [];
    this.selectedPlayers = [];
   }

  ngOnInit() {
    /* this.players = this.navParams.get('firstName'); */
    const url = `/api/player`;
    this.http.get<User[]>(url).subscribe(players => {
      console.log(`Player loaded`, players);
      this.players = players;
    });
  }

  selectPlayer(player){
    
    if (this.selectedPlayers.includes(player)) {
      //this.selectedPlayers.filter(user => user._id !== player._id);
      this.selectedPlayers.splice(this.selectedPlayers.indexOf(player),1);
    }else{ 
      this.selectedPlayers.push(player);
    }
    console.log(this.selectedPlayers);
  }
  
  closeModal(){
    this.modalController.dismiss();
  }

  addInTeam(){
    this.modalController.dismiss(this.selectedPlayers);
  }

}
