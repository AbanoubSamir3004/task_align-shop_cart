import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {
  faAnglesLeft,
  faAnglesRight, faHome, faListCheck, faMinus, faPlus, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PrimeNGModule } from './primeNG.module';
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [],
  imports: [
    PrimeNGModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CommonModule,
  ],
  exports: [
    ReactiveFormsModule,
    PrimeNGModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    CommonModule,
    TranslateModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faHome,
      faListCheck,
      faAnglesLeft,
      faAnglesRight,
      faTrash,
      faPlus,
      faMinus
    );
  }
}

