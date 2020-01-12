import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { AuthRequest } from '../models/auth-request';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

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
    private navCtrl: NavController
  ) {
    this.players = [];
  }

  ngOnInit() {
  }

  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
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
      "picture": "https://banner2.cleanpng.com/20180722/gfc/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c0968c377.0307553315323166814291.jpg",
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
