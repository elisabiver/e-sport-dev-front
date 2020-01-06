import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-tournament',
  templateUrl: './edit-tournament.page.html',
  styleUrls: ['./edit-tournament.page.scss'],
})
export class EditTournamentPage implements OnInit {

  constructor() { }
  greeting: string;
  displayedGreeting: string;

  displayGreeting(form: NgForm) {
    if (form.valid) {
      this.displayedGreeting = this.greeting;
      console.log('Greeting displayed');
    }
  }
  ngOnInit() {
  }

}
