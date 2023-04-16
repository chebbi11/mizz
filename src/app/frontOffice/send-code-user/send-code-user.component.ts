import { Component } from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-send-code-user',
  templateUrl: './send-code-user.component.html',
  styleUrls: ['./send-code-user.component.css']
})
export class SendCodeUserComponent {
  email!: string;
  code!: number;
  message!: string;

  constructor(private userService: UserService) {}

  sendCode() {
    this.userService.sendCode(this.email)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = 'Code sent successfully';
        },
        (error) => {
          console.error(error);
          this.message = 'Failed to send code';
        }
      );
  }

}
