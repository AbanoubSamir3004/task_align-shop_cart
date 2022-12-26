import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { MainModule } from 'app/core/shared/main.module';  
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
 const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];
@NgModule({
  imports: [MainModule,HttpClientModule,  RouterModule.forChild(routes)],

  declarations: [LoginComponent]
})
export class AuthModule { }
