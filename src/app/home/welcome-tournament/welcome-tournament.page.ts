import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { defaultIcon } from 'src/app/home/welcome-tournament/default-marker';
import { customIcon } from 'src/app/home/welcome-tournament/custom-marker';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Tournament } from 'src/app/models/tournament';
import { Team } from 'src/app/models/team';
import { ToastController } from '@ionic/angular';
import { CacheService } from 'src/app/services/cache-service.service';


@Component({
  selector: 'app-welcome-tournament',
  templateUrl: './welcome-tournament.page.html',
  styleUrls: ['./welcome-tournament.page.scss'],
})
export class WelcomeTournamentPage implements OnInit {
  id: string;
  name: string;
  tournament: Tournament;
  mapOptions: MapOptions;
  mapMarkers= [];
  teams: Team[];
  teamsInTournament: Team[];

   onMapReady(map: Map) {
    setTimeout(() => map.invalidateSize(), 0);
  }


  constructor(private geolocation: Geolocation,
              private route: ActivatedRoute,
              public http: HttpClient,
              private toastController: ToastController,
              private location: Location,
              private cache: CacheService<Tournament>,
              private router: Router) { }

    
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    const urlTournament = `api/tournament/${this.id}`;
    
    // récuperer la team dans le tournament depuis le cache
    this.cache.getCache()
    console.log(this.cache);

    this.http.get<Tournament>(urlTournament).subscribe(result => {
      this.tournament = result;
      console.log(this.tournament);
      this.mapMarkers.push(marker([this.tournament.location.coordinates[0],this.tournament.location.coordinates[1]], { icon: defaultIcon }).bindPopup(this.tournament.name))
    });

    this.mapOptions = {
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 18 }
        )
      ],
      zoom: 7,
      center: latLng(46.778186, 6.641524)
    };

    this.geolocation.getCurrentPosition().then((position: Geoposition) => {
      const coords = position.coords;
      this.mapMarkers.push(marker([coords.latitude, coords.longitude], { icon: customIcon }).bindPopup("Your current position"))
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    }); 
  }

  



  updateTournamentPath(){
    this.router.navigate(['home/edit-tournament', this.id]);
   // this.router.navigateByUrl('/home/edit-team', this.id);
  }


  
  
  deleteTournament(){

    const deleteUrl = `api/tournament/${this.id}`;
    this.http.delete(deleteUrl).subscribe(async() => {

      const toastSuccess = await this.toastController.create({
        message: 'The tournament has been deleted successfully',
        duration: 4000,
        showCloseButton: true,
        color: 'dark'
      });
      toastSuccess.present();
      this.router.navigateByUrl('home/tournaments-list');


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
    this.location.back();
  }
}