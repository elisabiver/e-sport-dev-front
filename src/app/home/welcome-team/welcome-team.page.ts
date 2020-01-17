import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { Location } from '@angular/common';
import { CacheService } from 'src/app/services/cache-service.service';
import { TeamService } from 'src/app/team.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome-team',
  templateUrl: './welcome-team.page.html',
  styleUrls: ['./welcome-team.page.scss'],
})
export class WelcomeTeamPage implements OnInit {

  id: string;
  team: Team;

  constructor(private auth: AuthService,
     private teamService: TeamService,
     private route: ActivatedRoute,
     private router: Router,
     public http: HttpClient, 
     private location: Location, 
     private cache: CacheService<Team>) { }

  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    const urlTeam = `api/team/${this.id}`;
    
       // récuperer la team depuis le cache
      // this.team.getCache()
      this.cache.getCache();

    this.http.get<Team>(urlTeam).subscribe(result => {
      this.team = result;
      console.log(this.team);
    });

 

  }

  ionViewWillEnter(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    const urlTeam = `api/team/${this.id}`;
    
       // récuperer la team depuis le cache
      // this.team.getCache()
      //this.cache.getCache();

    this.http.get<Team>(urlTeam).subscribe(result => {
      this.team = result;
      console.log(this.team);
    });
  }
  

  GoBack() {
    this.location.back();
  }
  

  updateTeamPath(){
    this.router.navigate(['home/edit-team', this.id]);
   // this.router.navigateByUrl(['/home/edit-team', this.id]);
  }


  
  
  deleteTeam(){

    const deleteUrl = `api/team/${this.id}`;
    this.http.delete(deleteUrl).subscribe(res => { console.log(res)});
    this.router.navigateByUrl('home/teams-list');
  }

}
