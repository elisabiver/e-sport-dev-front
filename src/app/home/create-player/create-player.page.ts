import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.page.html',
  styleUrls: ['./create-player.page.scss'],
})
export class CreatePlayerPage implements OnInit {

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
