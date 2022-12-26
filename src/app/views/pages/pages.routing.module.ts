import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@modules/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('@modules/test.module').then((m) => m.TestModule),
  },
  {
    path: '401',
    loadChildren: () =>
      import('@modules/error-401.module').then((m) => m.Error401Module),
  },
  {
    path: '404',
    loadChildren: () =>
      import('@modules/error-404.module').then((m) => m.Error404Module),
  },

  {
    path: '**',
    loadChildren: () =>
      import('@modules/error-404.module').then((m) => m.Error404Module),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PagesRoutingModule {}
