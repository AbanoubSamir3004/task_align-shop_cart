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
  rememberMe: boolean = false;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    public mainService: MainService,
    private route: ActivatedRoute,
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  date = new Date();

  loginForm = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
    RememberMe: new FormControl(false, [Validators.required]),
  });

  get login() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    let headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      'langCss'
    ) as HTMLLinkElement;
    let bundleName = lang === 'AR' ? 'arabicStyle.css' : 'englishStyle.css';
    if (existingLink) existingLink.href = bundleName;
    else {
      let newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);

      let mainStyle = this.document.createElement('link');
      mainStyle.rel = 'stylesheet';
      mainStyle.type = 'text/css';
      mainStyle.id = 'langCss';
      mainStyle.href = 'style.css';
      headTag.appendChild(mainStyle);
    }
    this.primengConfig.ripple = true;
  }
test:any
  Login() {
    this.submit = true;
    if (this.loginForm.invalid) return;

    if (this.submit && this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (res: Login) => {
          this.role = res.data.roleName;
          localStorage.setItem('token_Azhar', `Bearer ${res.data.token}`);
          localStorage.setItem('role', this.role);
        },
        (error: ErrorInterface) => {
// this.test = error.errors.join("")
// this.messageService.add(this.mainService.toastErrorHandler(this.test))
          this.mainService.handleError(error);
          error.errors.forEach((err: any) => {
            this.messageService.add(this.mainService.toastErrorHandler(err));
          });
        },
        () => {
          this.messageService.add(
            this.mainService.toastSuccessRequest('تم تسجيل الدخول بنجاح')
          );
          this.clearSave();
        }
      );
    }
  }

  clearSave() {
    this.submit = false;
    let pageBeforeLogin = this.route.snapshot.queryParams['returnUrl'];
    if (pageBeforeLogin) this.router.navigateByUrl(pageBeforeLogin);
    else {
      this.router.navigateByUrl('/');
    }
  }
}
