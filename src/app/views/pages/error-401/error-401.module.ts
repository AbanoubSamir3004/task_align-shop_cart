import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error401Component } from './error-401.component';
import { MainModule } from '@modules/main.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: Error401Component }];

@NgModule({
  imports: [MainModule, RouterModule.forChild(routes)],
  declarations: [Error401Component],
})
export class Error401Module {}
