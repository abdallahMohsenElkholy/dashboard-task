import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  activeLink='home'
  isOpen=true
  resNav=false

  menu1=false
  menu2=false
  m1IsOpen=false
  m2IsOpen=false
  openCloseAnimation: any;
  @Input() ltr :boolean = false;
  @Output() isSideOpenedEvt = new EventEmitter();

  getActive(link:string){
    this.activeLink=link
    if (link=='menu-1') {
      this.m1IsOpen=!this.m1IsOpen
      this.menu1=!this.menu1
      this.menu2=false
      this.m2IsOpen=false
    }
    else if (link=='menu-2') {
      this.m2IsOpen=!this.m2IsOpen
      this.menu2=!this.menu2
      this.menu1=false
      this.m1IsOpen=false
    }else{
      this.menu1=false
      this.m1IsOpen=false
      this.menu2=false
      this.m2IsOpen=false
    }
  }

  toggleSideNav() {
    this.isOpen = !this.isOpen;
    this.isSideOpenedEvt.emit(this.isOpen)
  }
}
