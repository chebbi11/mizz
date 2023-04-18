import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthenticationRequest, User} from "../../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication-user',
  templateUrl: './authentication-user.component.html',
  styleUrls: ['./authentication-user.component.css']
})
export class AuthenticationUserComponent {
  email!: string;
  password!: string;
  role!:string;
  constructor(private userService: UserService,private router: Router) { }
  onSubmit() {
    const request: AuthenticationRequest = { email: this.email, password: this.password };
    this.userService.authenticate(request).subscribe(
      response => {
        console.log(response.token);
        // Enregistrer le token JWT dans le localStorage
        localStorage.setItem('token', response.token);
        // Rediriger l'utilisateur en fonction de son rôle
        const user: User = JSON.parse(atob(response.token.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur
        if (user.role === 'ADMIN') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['admin']);
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}
