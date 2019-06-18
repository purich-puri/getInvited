import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  nickname = '';
 
  constructor(
    private authService: AuthService, 
    private toastctrl: ToastController,
    private router: Router) { }
 
  ngOnInit() {
    this.nickname = this.authService.nickname;
  }
 
  updateUser() {
    this.authService.updateUser(this.nickname).then(async () => {
      let toast = await this.toastctrl.create({
        duration: 3000,
        message: 'Nickname Updated'
      });
      toast.present();
    })
  }

  logOut(){
    this.authService.signOut()
    .then(() => {
      console.log("logged out");
      this.router.navigate(['/login'])
    })
    .catch();

  }
 
}
