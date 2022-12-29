import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FileUploadModule } from 'primeng/fileupload';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { GalleriaModule } from 'primeng/galleria';
import { CheckboxModule } from 'primeng/checkbox'
import { ToggleButtonModule } from 'primeng/togglebutton';
import { CardModule } from 'primeng/card';
import {RatingModule} from 'primeng/rating';

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
    DropdownModule,
    CalendarModule,
    ProgressSpinnerModule,
    FileUploadModule,
    MultiSelectModule,
    PaginatorModule,
    GalleriaModule,
    CheckboxModule,
    ToggleButtonModule
  ],
  declarations: [],
})
export class PrimeNGModule { }
