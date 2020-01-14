import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { AuthRequest } from '../models/auth-request';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  players: User[];

  constructor(private modalController: ModalController,
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private navCtrl: NavController,
  ) {
    this.players = [];
  }

  ngOnInit() {
  }

  // Dismiss Register Modal
  goBackLogin() {
    this.location.back();
  }

  // Register datas from form
  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let payload = {
      "firstName": form.value.firstName,
      "lastName": form.value.lastName,
      "pseudo": form.value.pseudo,
      "password": form.value.password,
      "birthDate": form.value.birthDate,
      "picture": "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
      "gender": form.controls['gender'].value
    };

    this.authService.register(payload).subscribe({
      next: () => {
        this.navCtrl.navigateBack('/welcome-player');
      },
      error: err => {
        console.warn(`Registration failed: ${err.message}`);
      }
    })

/*     return this.httpClient.post(authUrl, payload).subscribe({
      next: () => {
        this.navCtrl.navigateBack('/home');
      },
      error: err => {
        console.warn(`Registration failed: ${err.message}`);
      }
    }
    ) */
  }


}
