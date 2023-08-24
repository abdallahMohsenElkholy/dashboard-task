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
  ltr=false

  switchLanguage(lang: any) {
    this.translate.use(lang.value);
    if(lang.value==='ar'){
      this.dir='rtl'
      this.ltr=false
    }else{
      this.dir='ltr'
      this.ltr=true
    }
  }
}
