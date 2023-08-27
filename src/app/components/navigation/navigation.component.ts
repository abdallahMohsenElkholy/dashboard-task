import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  activeLink='home'
  resNav=false
  open=false
  arrow='expand_more'
  arrow2='expand_more'
  @Input() ltr :boolean = false
  
  getActive(link:string ,opt?:any){
    this.activeLink=link
    if (opt!==undefined) {  
      if (opt==='toggle') {
        this.open=!this.open
        if (this.open) {
          if (link==='menu-1') {
            this.arrow2='expand_more'
            this.arrow='expand_less'
          }else{
            this.arrow2='expand_less'
            this.arrow='expand_more'
          }
        }else{
          this.arrow=this.arrow2='expand_more'
        }
      }
      if (opt==='close') {
        this.open=true
      }
    }else{
      this.open=false
      this.arrow=this.arrow2='expand_more'
    }
  }
}
