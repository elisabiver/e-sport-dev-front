import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from '@ionic-native/geolocation/ngx';
import { defaultIcon } from 'src/app/home/welcome-tournament/default-marker';
import { latLng, MapOptions, marker, Marker, tileLayer, Map } from 'leaflet';

@Component({
  selector: 'app-welcome-tournament',
  templateUrl: './welcome-tournament.page.html',
  styleUrls: ['./welcome-tournament.page.scss'],
})
export class WelcomeTournamentPage implements OnInit {
  mapOptions: MapOptions;
  mapMarkers= [] ;

   onMapReady(map: Map) {
    setTimeout(() => map.invalidateSize(), 0);
  }

  constructor(private geolocation: Geolocation) { }
    
  ngOnInit() {
    this.mapMarkers.push(marker([50.2482499,19.0184438], { icon: defaultIcon }).bindPopup('ESL'))
    this.mapOptions = {
      layers: [
        tileLayer(
          'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          { maxZoom: 18 }
        )
      ],
      zoom: 5,
      center: latLng(46.778186, 6.641524)
    };

    this.geolocation.getCurrentPosition().then((position: Geoposition) => {
      const coords = position.coords;
      this.mapMarkers.push(marker([coords.latitude, coords.longitude], { icon: defaultIcon }).bindPopup("Your current position"))
    }).catch(err => {
      console.warn(`Could not retrieve user position because: ${err.message}`);
    }); 
  }
}