import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-buyer-user',
  templateUrl: './register-buyer-user.component.html',
  styleUrls: ['./register-buyer-user.component.css']
})
export class RegisterBuyerUserComponent implements OnInit{

  registerRequest: any = {};
  successMessage: string = '';
  roles: string[] = ['ADMIN', 'MODERATOR', 'BUYER','VENDOR','PROVIDER','LIVREUR'];
  defaultRole:string='BUYER';
  isLoading: boolean = false;

  ngOnInit(): void {

  }
  constructor(private userService: UserService,private router: Router) { }

  register() {
    this.isLoading = true;
    this.registerRequest.role = this.defaultRole;
    this.userService.register(this.registerRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le compte a été créé avec succès !';
        // Si la requête a réussi, vous pouvez effectuer des actions supplémentaires ici, telles que rediriger l'utilisateur vers une autre page
        this.router.navigate(['user/send-code']);
        this.isLoading = false;
      },
      error => {
        console.error(error);
        // Si la requête a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
        this.isLoading = false;
      }
    );
  }
}
