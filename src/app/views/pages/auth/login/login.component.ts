import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '@modules/main.service';
import { ErrorInterface } from 'app/core/interceptor/error.interface';
import { Login } from 'app/core/models/auth';
import { AuthService } from 'app/core/services/auth.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submit: boolean = false;
  role: string = '';

  constructor(
    private authService: AuthService,
    public mainService: MainService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get login() {
    return this.loginForm.controls;
  }

  ngOnInit() {}
  Login() {
    this.submit = true;
    if (this.submit && this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (res: Login) => {
          localStorage.setItem('token', `Bearer ${res.token}`);
        },
        (error: ErrorInterface) => {
          this.mainService.handleError(error);
          error.errors.forEach((err: any) => {
            this.mainService.showErrorMSG(err);
          });
        },
        () => {
          this.mainService.showSuccessMSG('Logined Successfuly');
          this.submit = false;
          this.router.navigateByUrl('/');
        }
      );
    } else return;
  }
}
