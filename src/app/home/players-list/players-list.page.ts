import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.page.html',
  styleUrls: ['./players-list.page.scss'],
})
export class PlayersListPage implements OnInit {

  constructor(private auth: AuthService, public http: HttpClient) { }

  ngOnInit() {
  }

  ionViewDidLoad() {
    // retrieves all the players
    const url = `${environment.apiUrl}/player`;
    this.http.get(url).subscribe(players => {
      console.log(`Player loaded`, players);
    });
  }

}
