import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MainService } from 'app/core/shared/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  asideIconOpen: boolean = true;
  constructor(
    private translate: TranslateService,
    public mainService: MainService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit() {
    this.checkLangage();
    console.log("OnInit header component")
  }

  checkLangage() {
    let current = localStorage.getItem('lang');
    if (current) this.changeLangage(current);
    else {
      localStorage.setItem('lang', 'AR');
      this.changeLangage('AR');
    console.log("else")

    }
  }

  changeLangage(lang: string) {
    this.translate.use(lang.toLowerCase());

    localStorage.setItem('lang', lang);
    this.mainService.otherLang = lang === 'AR' ? 'EN' : 'AR';
    let htmlTag = this.document.getElementsByTagName(
      'html'
    )[0] as HTMLHtmlElement;
    htmlTag.dir = lang === 'AR' ? 'rtl' : 'ltr';
    this.changeCssFile(lang);
  }

  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName(
      'head'
    )[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById(
      'langCss'
    ) as HTMLLinkElement;
    let bundleName = lang === 'AR' ? 'arabicStyle.css' : 'englishStyle.css';
    if (existingLink) existingLink.href = bundleName;
    else {
      let newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.type = 'text/css';
      newLink.id = 'langCss';
      newLink.href = bundleName;
      headTag.appendChild(newLink);

      let mainStyle = this.document.createElement('link');
      mainStyle.rel = 'stylesheet';
      mainStyle.type = 'text/css';
      mainStyle.id = 'langCss';
      mainStyle.href = 'style.css';
      headTag.appendChild(mainStyle);
    }
  }

  reloadLang() {
    localStorage.getItem('lang') == 'AR'
      ? localStorage.setItem('lang', 'EN')
      : localStorage.setItem('lang', 'AR');
    window.location.reload();
  }
}
