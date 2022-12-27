import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { MainModule } from '@modules/main.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path: '', component: RegisterComponent}];

@NgModule({
  imports: [
    MainModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
