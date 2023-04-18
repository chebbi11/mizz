import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent {
  constructor(private router: Router) {
  }
  redirectToShow() {
    console.log("ok");
    this.router.navigate(['admin/show']);
  }
  redirectToDashboard() {
    console.log("ok");
    this.router.navigate(['admin']);
  }
}
