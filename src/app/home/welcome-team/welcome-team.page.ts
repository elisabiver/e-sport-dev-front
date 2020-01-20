import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { CacheService } from 'src/app/services/cache-service.service';
import { TeamService } from 'src/app/team.service';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-welcome-team',
  templateUrl: './welcome-team.page.html',
  styleUrls: ['./welcome-team.page.scss'],
})
export class WelcomeTeamPage implements OnInit {

  id: string;
  team: Team;
  cachedTeam:Team; 

  constructor(private auth: AuthService,
     private teamService: TeamService,
     private route: ActivatedRoute,
     private router: Router,
     private toastController: ToastController,
     public http: HttpClient, 
     private cache: CacheService<Team>) { }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.id = params['id'];

         // récuperer la team depuis le cache
     this.cachedTeam = this.cache.getCache()
     console.log(this.cachedTeam);
    });

    
      // récuperer la team depuis le cache
  
     

/*
    this.http.get<Team>(urlTeam).subscribe(result => {
      this.team = result;
      
    }); */
  }

  ionViewWillEnter(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    //const urlTeam = `api/team/${this.id}`;
    
       // récuperer la team depuis le cache
      // this.team.getCache()
      //this.cache.getCache();
/*
    this.http.get<Team>(urlTeam).subscribe(result => {
      this.team = result;
      //console.log(this.team);
      
    });
    */
  }
  

  GoBack() {
    //this.location.back();
    this.router.navigate(['home/teams-list'])
  }
  
  updateTeamPath(){
    this.router.navigate(['home/edit-team', this.id]);
   // this.router.navigateByUrl('/home/edit-team', this.id);
  }

  deleteTeam(){

    const deleteUrl = `api/team/${this.id}`;
    this.http.delete(deleteUrl).subscribe(async() => {

      const toastSuccess = await this.toastController.create({
        message: 'Your team has been deleted successfuly',
        duration: 4000,
        showCloseButton: true,
        color: 'dark'
      });
      toastSuccess.present();
      this.router.navigateByUrl('home/teams-list');


    }, async err =>{

      const toastFail = await this.toastController.create({
        message: 'An error occured, Please try later',
        duration: 4000,
        showCloseButton: true,
        color: 'dark'
      });
      toastFail.present();
      

    });
  }

}