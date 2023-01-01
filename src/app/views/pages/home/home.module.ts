import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MainModule } from '@modules/main.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path: '', component: HomeComponent , title: 'Home'}];


@NgModule({
  imports: [
    MainModule , RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
