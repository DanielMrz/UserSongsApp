import { Component } from '@angular/core';

import { faUser, faLock, faEye, faEyeSlash,faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  faUser = faUser;
  faLock = faLock;
  faEyeSlash = faEyeSlash;
  faArrowRightToBracket = faArrowRightToBracket;

  /* Dla inputu password */
  type: string = "password";
  isText: boolean = false;

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.faEyeSlash = faEye : this.faEyeSlash = faEyeSlash;
    this.isText ? this.type = "text" : this.type = "password";
  }

}
