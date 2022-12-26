import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from 'app/core/shared/main.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing.module';

// const routes: Routes = [{path: '', component: PagesComponent}]
@NgModule({
    declarations: [PagesComponent],
    exports: [],
    imports: [MainModule ,  PagesRoutingModule],
})
export class PagesModule {}
