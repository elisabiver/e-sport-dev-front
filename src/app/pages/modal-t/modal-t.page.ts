import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Team } from 'src/app/models/team';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-t',
  templateUrl: './modal-t.page.html',
  styleUrls: ['./modal-t.page.scss'],
})
export class ModalTPage implements OnInit {

  teams: Team[];
  selectedTeams: Team[];

  constructor(private navParams: NavParams,
    private modalController: ModalController,
    private http: HttpClient,
    private router: Router) {
    this.teams = [];
    this.selectedTeams = []; 
  }

  ngOnInit() {
    const url = `/api/team`;
    this.http.get<Team[]>(url).subscribe(teams => {
      this.teams = teams;
    });
  }

  closeModal(){
    this.modalController.dismiss();
  }


  selectTeams(team){
    
    if (this.selectedTeams.includes(team)) {
      //this.selectedPlayers.filter(user => user._id !== player._id);
      this.selectedTeams.splice(this.selectedTeams.indexOf(team),1);
    }else{ 
      this.selectedTeams.push(team);
    }
    console.log(this.selectedTeams);
  }

  addInTournament(){
    this.modalController.dismiss(this.selectedTeams);
  }

}
