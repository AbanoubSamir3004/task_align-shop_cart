import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'app/core/shared/main.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  role = localStorage.getItem('user_Role');
  projects: any[] = [
    { link: 'home', name: 'الرئيسية' },
    { link: 'workplans', name: 'خطط العمل' },
    { link: 'rating', name: 'تقييم الأداء' },
    { link: 'todayPreperations', name: 'تحضيرات اليوم' },
    { link: 'preparations', name: 'التحضيرات' },
    { link: 'insectEpicenter', name: ' الكثافة الحشرية' },
    { link: 'insectExploration', name: ' الإستكشاف الحشري' },
    { link: 'trackSystem', name: 'تتبع السيارات' },
  ];

  contructors: any[] = [
    { link: 'home', name: 'بيانات المقاول' },
    { link: 'projectData', name: 'بيانات المشروع' },
    { link: 'financialTransactions', name: 'المعاملات المالية' },
    { link: 'contractorRating', name: 'تقيم المقاول' },
  ];

  dengueFeverHonesty: any[] = [
    // {
    //   link: 'dengue-fever/',
    //   name: 'الرئيسية',
    //   role: 'All',
    // },
    {
      link: 'dengue-fever/daily-routine',
      name: '  الروتين اليومي',
      role: 'All',
    },
    {
      link: '/mobile-app/dengue-fever-actions/add-daily-routine',
      name: 'إضافة عمل روتيني',
      role: 'Honesty',
    },
    {
      link: 'dengue-fever/cases-house',
      name: '  منزل الحالة',
      role: 'All',
    },
    {
      link: '/mobile-app/dengue-fever-actions/add-case-home',
      name: 'إضافة منزل حالة',
      role: 'Honesty',
    },
    {
      link: 'dengue-fever/adjacent-home',
      name: 'المنازل المجاورة',
      role: 'All',
    },
    {
      link: '/mobile-app/dengue-fever-actions/add-neighboring-house',
      name: 'إضافة منزل مجاور',
      role: 'Honesty',
    },
  ];

  dengueFever: any[] = [
    {
      link: 'dengue-fever/',
      name: 'الرئيسية',
    },
    {
      link: 'dengue-fever/daily-routine',
      name: '  الروتين اليومي',
    },
    {
      link: 'dengue-fever/cases-house',
      name: '  منزل الحالة',
    },
    {
      link: 'dengue-fever/adjacent-home',
      name: 'المنازل المجاورة',
    },
  ];

  management: any[] = [
    { link: 'add-excel-line', name: ' اضافة مسار من Excel' },
    { link: 'add-work-plan', name: 'اضافة خطط العمل' },
    { link: 'cities', name: ' البلديات' },
    { link: 'add-district', name: 'اضافة حي ' },
    { link: 'activate-tracks-for-cars', name: 'تفعيل المسارات للسيارات' },
    // { link: 'preperation-notes', name: 'التحضيرات ' },
    { link: 'vehicles', name: 'سيارات المشاريع' },
    { link: 'users', name: 'المستخدمين' },
    { link: 'contractors', name: 'المقاولين' },
    { link: 'contractor-money', name: 'المستخلصات' },
    { link: 'insect-explorations', name: ' الاستكشاف الحشري' },
    { link: 'epicenters', name: 'الكثافة الحشرية' },
    // { link: 'dangue-fever', name: 'الحملة المكثفة' },
  ];

  management_dangue_fever: any[] = [
    {
      link: 'dengue-fever/daily-routine',
      name: '  الروتين اليومي',
    },
    {
      link: 'dengue-fever/cases-house',
      name: '  منزل الحالة',
    },
    {
      link: 'dengue-fever/adjacent-home',
      name: 'المنازل المجاورة',
    },
  ];
  exploration_pages: any[] = [
    // { link: 'all-sites', name: 'كل المواقع' },
    { link: 'add-site', name: 'اضافة موقع جديد' },
    // { link: 'add-closest-site', name: 'اضافة اقرب موقع ' },
    // { link: 'add-visit-site', name: 'اضافة زيارة' },
  ];

  insect_denisty_pages: any[] = [
    // { link: 'all-sites', name: 'كل المواقع' },
    { link: 'add-site', name: 'اضافة موقع جديد' },
    // { link: 'add-closest-site', name: 'اضافة اقرب موقع ' },
    // { link: 'add-visit-site', name: 'اضافة زيارة' },
  ];

  pageURL: string = '';
  constructor(
    public mainService: MainService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.pageURL = this.router.url;
  }

  ngOnInit() {}
  asideOpenClose(url: string) {
    if (url == this.router.url) {
      return true;
    }
    return false;
  }

  preparations: boolean = false;
  insectEpicenter: boolean = false;
  insectExploration: boolean = false;
  observersNotes: boolean = false;
  loadSubMenu(menu: string) {
    if (menu == 'preparations') {
      this.preparations = !this.preparations;
      this.insectEpicenter = false;
      this.insectExploration = false;
      this.observersNotes = false;
    }
    if (menu == 'insectEpicenter') {
      this.insectEpicenter = !this.insectEpicenter;
      this.insectExploration = false;
      this.preparations = false;
      this.observersNotes = false;
    }
    if (menu == 'insectExploration') {
      this.insectExploration = !this.insectExploration;
      this.insectEpicenter = false;
      this.preparations = false;
      this.observersNotes = false;
    }
    if (menu == 'observersNotes') {
      this.observersNotes = !this.observersNotes;
      this.insectEpicenter = false;
      this.preparations = false;
      this.insectExploration = false;
    }
  }
}
