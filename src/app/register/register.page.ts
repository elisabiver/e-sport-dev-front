import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';
import { AuthRequest } from '../models/auth-request';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  authRequest: AuthRequest;

  constructor(private modalController: ModalController,
    private authService: AuthService,
    private router: Router,
  ) { 
    this.authRequest = new AuthRequest();
  }

  ngOnInit() {
  }

  // Dismiss Register Modal
  dismissRegister() {
    this.modalController.dismiss();
  }

  // TODO un dismiss si on clique sur login

  // Register datas from form

  register(form: NgForm){
    this.authService.register(form.value.firstName, form.value.lastName, form.value.pseudo, form.value.email, form.value.birthDate,form.value.password).subscribe(
      data => {
        // TODO Ici y a un probleme...
        this.authService.logIn(this.authRequest).subscribe({
          next: () => {
            this.router.navigateByUrl('/home');
          },
          error: err => {
            console.warn(`Registration failed: ${err.message}`);
          }
        });
      }
    )
  } 


}
