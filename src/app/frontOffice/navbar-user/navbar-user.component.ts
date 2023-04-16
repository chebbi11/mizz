import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent{
  constructor(private router: Router) {
  }
  redirectToRegister() {
    console.log("ok");
    this.router.navigate(['user/register']);
  }
  redirectToHome() {
    console.log("ok");
    this.router.navigate(['user']);
  }
}
