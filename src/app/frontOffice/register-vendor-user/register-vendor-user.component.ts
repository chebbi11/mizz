import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register-vendor-user',
  templateUrl: './register-vendor-user.component.html',
  styleUrls: ['./register-vendor-user.component.css']
})
export class RegisterVendorUserComponent implements OnInit{
  registerRequest: any = {};
  successMessage: string = '';
  roles: string[] = ['ADMIN', 'MODERATOR', 'BUYER','VENDOR','PROVIDER','LIVREUR'];
  defaultRole:string='VENDOR';

  ngOnInit(): void {

  }
  constructor(private userService: UserService) { }
  register() {
    this.registerRequest.role = this.defaultRole;
    this.userService.register(this.registerRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le compte a été créé avec succès !';
        // Si la requête a réussi, vous pouvez effectuer des actions supplémentaires ici, telles que rediriger l'utilisateur vers une autre page
      },
      error => {
        console.error(error);
        // Si la requête a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
      }
    );
  }
}
