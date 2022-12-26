import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
  faArrowLeft,
  faArrowLeftLong,
  faArrowRightLong,
  faBars,
  faBarsStaggered,
  faBugs,
  faChartColumn,
  faCheck,
  faCircleCheck,
  faCircleMinus,
  faCirclePlus,
  faCircleXmark,
  faCow,
  faEarthAsia,
  faEye,
  faFileExcel,
  faCalendar,
  faFilePdf,
  faFileWord,
  faGear,
  faGears,
  faHouse,
  faHouseChimneyUser,
  faListCheck,
  faLungsVirus,
  faMap,
  faMapLocationDot,
  faMortarPestle,
  faNoteSticky,
  faPaperPlane,
  faPencil,
  faPenToSquare,
  faPlus,
  faReply,
  faScrewdriverWrench,
  faSyringe,
  faTrash,
  faTrashCan,
  faTriangleExclamation,
  faUserGear,
  faViruses,
  faWandMagicSparkles,
  faWrench,
  faXmark,
  faVirus,
  faPowerOff,
  faUser,
  faUnlock,
  faUnlockKeyhole,

} from '@fortawesome/free-solid-svg-icons';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { PrimeNGModule } from './primeNG.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CommonModule } from '@angular/common';
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
      faPlus,
      faEye,
      faPencil,
      faTrash,
      faScrewdriverWrench,
      faWrench,
      faCow,
      faMortarPestle,
      faBugs,
      faEarthAsia,
      faViruses,
      faLungsVirus,
      faSyringe,
      faHouse,
      faChartColumn,
      faMap,
      faCircleMinus,
      faCircleXmark,
      faCircleCheck,
      faCirclePlus,
      faFileWord,
      faFilePdf,
      faFileExcel,
      faTriangleExclamation,
      faAngleRight,
      faAngleLeft,
      faWandMagicSparkles,
      faMapLocationDot,
      faHouseChimneyUser,
      faReply,
      faCheck,
      faCalendar,
      faXmark,
      faPaperPlane,
      faBars,
      faPenToSquare,
      faTrashCan,
      faAngleDown,
      faBarsStaggered,
      faArrowLeftLong,
      faArrowRightLong,
      faUserGear,
      faGears,
      faNoteSticky,
      faGears,
      faGear,
      faListCheck,
      faAnglesLeft,
      faAnglesRight,
      faArrowLeft,
      faVirus,
      faPencil,
      faPowerOff,
      faUser,
      faUnlockKeyhole

    );
  }
}
