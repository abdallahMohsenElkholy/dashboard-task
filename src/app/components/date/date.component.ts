import { Component ,AfterViewInit, Input } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements AfterViewInit{
  @Input() ltr :boolean = false
  num:number=1
  days=['Sun','Mon','thu','Win','Thr','Fri','Sat']
  dayNum:number=1
  month!:string
  year!:number
  fromDate:any
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  users=[
    {light:'#F2F5F1' ,uName:'u1',pra:'uPra',from:'05:00',to:'06:00',time:'PM',src:'../../../assets/images/u1.jpeg'},
    {light:'#FFF6E3' ,uName:'u2',pra:'uPra',from:'04:00',to:'05:00',time:'PM',src:'../../../assets/images/u2.jpeg'},
    {dark:'#7661E2' ,uName:'u3',pra:'uPra',from:'03:00',to:'04:00',time:'AM',src:'../../../assets/images/u3.jpeg'},
    {light:'#F1ECFE' ,uName:'u4',pra:'uPra',from:'05:00',to:'06:00',time:'PM',src:'../../../assets/images/u4.jpeg'},
  ]

  calc(n:number,key:string){
    if (key==='arrow') {
      if (this.num===0&&n===-1) {
        this.num=6
      }
      else if  (this.num===6&&n===1) {
        this.num=0
      }else{
        this.num+=n
      }
    }else{
      this.num=n
    }
    
  }

  ngAfterViewInit(): void {
    this.fromDate= "2023-03-22"
    this.getDate(this.fromDate)
  }

  getDate(e:any){
    let date 
    e.value==undefined?date=new Date(e):date=new Date(e.value)
    this.dayNum=date.getDate()
    this.num=date.getDay()
    this.month=this.monthNames[date.getMonth()]
    this.year=date.getFullYear()
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}