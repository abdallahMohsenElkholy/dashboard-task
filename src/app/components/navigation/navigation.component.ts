import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          right: '0',
        })
      ),
      state(
        'closed',
        style({
          right: '-220px',
        })
      ),
      transition('closed <=> open', [animate('0.6s')]),
    ]),
    trigger('openCloseLtr', [
      // ...
      state(
        'open',
        style({
          left: '0',
        })
      ),
      state(
        'closed',
        style({
          left: '-220px',
        })
      ),
      transition('open => closed', [animate('1s')]),
      transition('closed => open', [animate('0.5s')]),
    ]),
  ],
})
export class NavigationComponent {
  activeLink='home'
  isOpen=false
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
