import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginGuard } from './core/guards/login.guard';
 
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('@modules/auth.module').then((m) => m.AuthModule),
      title: 'Login',
      canActivate:[LoginGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('@modules/layout.module').then((m) => m.LayoutModule),
      canActivateChild:[AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
