import { Component, OnInit } from '@angular/core';
//import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 // constructor(private authService: AuthService, private location: Location) { }
  public app_name = 'EVENTUM';



  public isLogged = false;
  public isLoggedUser = false;

 // user = this.authService.getCurrentUser()

  ngOnInit() {
    //this.onCheckUser();
  }

  // onLogout(): void {
  //   this.authService.logoutUser();
  //   location.reload();
  // }

  // onCheckUser(): void {

  //   let user = this.authService.getCurrentUser()
  //   if (this.authService.getCurrentUser() === null) {
  //     this.isLogged = false;
  //   } else if (user.email === "autoria@gmail.com"){
  //     this.isLogged = true;
      
  //     console.log("asadsd"+ user.email)
  //   } else if (user.email !== "autoria@gmail.com"){
  //     this.isLoggedUser = true;
  //     console.log("NO ES ADMIN")
  //   }
  // }
}
