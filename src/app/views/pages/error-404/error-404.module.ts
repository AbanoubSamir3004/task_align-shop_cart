import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from '@modules/main.module';
import { Error404Component } from './error-404.component';
const routes: Routes = [{path: '', component: Error404Component}]

@NgModule({
  imports: [
    MainModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Error404Component]
})
export class Error404Module { }
