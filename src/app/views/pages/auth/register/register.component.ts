import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { MainService } from '@modules/main.service';
import { ErrorInterface } from 'app/core/interceptor/error.interface';
import { Login } from 'app/core/models/auth';
import { AuthService } from 'app/core/services/auth.service';

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


  constructor(
    private authService: AuthService,
    public mainService: MainService,
  ) {}

  registerForm = new FormGroup({
    email: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl({}, [Validators.required]),
    address: new FormControl({}),
    phone: new FormControl('', [Validators.required]),
  });

  ngOnInit() {}
 
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
        }
      );
    } else return;
  }
}
