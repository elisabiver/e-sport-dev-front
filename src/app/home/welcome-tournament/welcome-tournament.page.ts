import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { defaultIcon } from 'src/app/home/welcome-tournament/default-marker';
import { customIcon } from 'src/app/home/welcome-tournament/custom-marker';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Tournament } from 'src/app/models/tournament';
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
  mapMarkers= [] ;

   onMapReady(map: Map) {
    setTimeout(() => map.invalidateSize(), 0);
  }

  constructor(private geolocation: Geolocation, private route: ActivatedRoute, public http: HttpClient, private location: Location, private cache: CacheService<Tournament>) { }
    
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

  GoBack() {
    this.location.back();
  }
}