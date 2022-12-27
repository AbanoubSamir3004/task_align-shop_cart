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
import { Login } from 'app/core/models/login';
import { LoginService } from 'app/core/services/login.service';
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
    private loginService: LoginService,
    private fb: FormBuilder,
    public mainService: MainService,
    private route: ActivatedRoute,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
  ) {}
  date = new Date();

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get login() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  Login() {
    this.submit = true;
    if (this.submit && this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (res: Login) => {
          localStorage.setItem('token', `Bearer ${res.token}`);
        },
        (error: ErrorInterface) => {
          this.mainService.handleError(error);
          error.errors.forEach((err: any) => {
            this.messageService.add(this.mainService.toastErrorHandler(err));
          });
        },
        () => {
          this.clearSave();
        }
      );
    }else return
  }

  clearSave() {
    this.submit = false;
    let pageBeforLogin = this.route.snapshot.queryParams['returnUrl'];
    if (pageBeforLogin) this.router.navigateByUrl(pageBeforLogin);
    else {
      this.router.navigateByUrl('/');
    }
    this.messageService.add(
      this.mainService.toastSuccessRequest('تم تسجيل الدخول بنجاح')
    );
  }
}
