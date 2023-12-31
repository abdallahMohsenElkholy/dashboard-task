import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'klingon']);
    translate.setDefaultLang('ar');
    translate.use('ar');
  }
  title = 'dashboard';
  dir="rtl"
  ltr=false;
  isOpenedSide: boolean = true;

  switchLanguage(lang: string) {
    this.translate.use(lang);
    if(lang==='ar'){
      this.dir='rtl'
      this.ltr=false
    }else{
      this.dir='ltr'
      this.ltr=true
    }
    document.body.style.direction = this.dir;
  }

  onToggleSideNav(evt: boolean) {
    this.isOpenedSide = evt;
  }
}
