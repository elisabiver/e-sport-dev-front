import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.page.html',
  styleUrls: ['./create-tournament.page.scss'],
})
export class CreateTournamentPage implements OnInit {

  greeting: string;
  displayedGreeting: string;

  displayGreeting(form: NgForm) {
    if (form.valid) {
      this.displayedGreeting = this.greeting;
      console.log('Greeting displayed');
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}
