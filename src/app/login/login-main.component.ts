import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss'],
})
export class LoginMainComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  loginForm: FormGroup;
  submitted = false;
  errorMessage: string;
  loderStatus;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loderStatus = true;
    setTimeout(() => {
      this.loderStatus = false;
      // display form values on success
      if (
        this.loginForm.get('email').value === 'admin@lntinfotech.com' &&
        this.loginForm.get('password').value === '123456'
      ) {
        this.loderStatus === true;
        this.router.navigate(['/dashboard']);
        // alert(
        //   'SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4)
        // );
      } else {
        this.errorMessage = 'Invalid credentials';
        this.loginForm.reset();
        setTimeout(() => {
          this.errorMessage = null;
        }, 6000);
      }
    }, 1000);
  }
  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }
}
