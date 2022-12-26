import { NgModule } from '@angular/core';
import { AsideComponent } from './aside/aside.component';
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { MainModule } from '@modules/main.module';

@NgModule({
  imports: [LayoutRoutingModule, MainModule],
  declarations: [
    BaseComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
  ],

  exports: [
    BaseComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
