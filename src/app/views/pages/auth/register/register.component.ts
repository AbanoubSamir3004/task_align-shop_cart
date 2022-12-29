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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  submit: boolean = false;
  name: {
    firstname: string;
    lastname: string;
  } = {
    firstname: '',
    lastname: '',
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  } = {
    city: '',
    street: '',
    number: 0,
    zipcode: '',
    geolocation: {
      lat: '',
      long: '',
    },
  };

  loginData: {
    username: string;
    password: string;
  } = { username: '', password: '' };
  constructor(
    private authService: AuthService,
    public mainService: MainService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl({}, [Validators.required]),
    address: new FormControl({}),
    phone: new FormControl('', [Validators.required]),
  });

  get login() {
    return this.registerForm.controls;
  }

  ngOnInit() {}
  Login() {
    this.submit = true;
    if (this.registerForm.controls.username.value) {
      this.loginData.username = this.registerForm.controls.username.value;
    }
    if (this.registerForm.controls.password.value) {
      this.loginData.password = this.registerForm.controls.password.value;
    }
    this.authService.register(this.loginData).subscribe(
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
        this.submit = false;
        let pageBeforLogin = this.route.snapshot.queryParams['returnUrl'];
        if (pageBeforLogin) this.router.navigateByUrl(pageBeforLogin);
        else {
          this.router.navigateByUrl('/');
        }
        this.mainService.showSuccessMSG('Logined Successfuly');
      }
    );
  }

  Register() {
    this.submit = true;
    this.registerForm.controls.name.patchValue(this.name);
    this.registerForm.controls.address.patchValue(this.address);
    console.log('this.registerForm.value', this.registerForm.value);
    if (this.submit && this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe(
        (res: Login) => {
          console.log(res);
        },
        (error: ErrorInterface) => {
          this.mainService.handleError(error);
          error.errors.forEach((err: any) => {
            this.mainService.showErrorMSG(err);
          });
        },
        () => {
          this.mainService.showSuccessMSG('Register Successfuly');
          this.Login();
        }
      );
    } else return;
  }
}
