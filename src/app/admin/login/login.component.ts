import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = new FormGroup({
    username: new FormControl('', [Validators.email, Validators.required, Validators.maxLength(30), Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(5)])
  });

  constructor(private authservice: AuthService, private router: Router) { }

  login() {

    if (this.form.valid) {

      const isValid = this.authservice.login(this.form.value.username, this.form.value.password);
      /** if (!isValid) {
        this.form.setErrors({
          inalidLogin: true
        });**/

    } else if (this.form.get('username').errors != null && this.form.get('password').errors != null) {
      this.form.get('username').setErrors({
        buttonClick: true
      });
      this.form.get('password').setErrors({
        buttonClick: true
      });
    }
    else if (this.form.get('password').errors != null) {
      this.form.get('password').setErrors({
        buttonClick: true
      });
    }
    else if (this.form.get('username').errors != null) {
      this.form.get('username').setErrors({
        buttonClick: true
      });
    }
  }

}
