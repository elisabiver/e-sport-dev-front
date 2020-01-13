import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.page.html',
  styleUrls: ['./players-list.page.scss'],
})
export class PlayersListPage implements OnInit {

  players: User[];

  constructor(private auth: AuthService, public http: HttpClient, private orderPipe: OrderPipe) {
    this.players = [];
  }

  ngOnInit() {
    // retrieves all the players
    const url = `/api/player`;
    this.http.get<User[]>(url).subscribe(players => {
      console.log(`Player loaded`, players);
      this.players = players;
      this.players = this.orderPipe.transform(this.players, "CreatedAt", true);
    });
    
  }

  sortPlayers(prop: string){

    console.log(event);
    this.players = this.orderPipe.transform(this.players, prop, false, true);
    console.log(this.players);
  
  }

  reverseSort(){
    this.players.reverse();
  }
}
