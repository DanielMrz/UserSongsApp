import { Component } from '@angular/core';

import { faUser, faLock, faEye, faEyeSlash, faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  faUser = faUser;
  faLock = faLock;
  faEyeSlash = faEyeSlash;
  faAt = faAt;

  /* Dla inputu password */
  type: string = "password";
  isText: boolean = false;

  hideShowPassword() {
    this.isText = !this.isText;
    this.isText ? this.faEyeSlash = faEye : this.faEyeSlash = faEyeSlash;
    this.isText ? this.type = "text" : this.type = "password";
  }
}
