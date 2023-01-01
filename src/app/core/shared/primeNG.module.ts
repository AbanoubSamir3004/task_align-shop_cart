import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [],
  exports: [
    RatingModule,
    CardModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    MessageModule,
    PasswordModule,
  ],
  declarations: [],
})
export class PrimeNGModule { }
