import { Component ,AfterViewInit, Input } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements AfterViewInit{
  @Input() ltr :boolean = false
  date:any
  num:number=1
  num1:number=1
  num2:number=1
  days=['Sun','Mon','thu','Win','Thr','Fri','Sat']
  dayNum:number=1
  month!:string
  year!:number
  lastDay0!:number
  lastDay1!:number
  lastDay2!:number
  fromDate:any
  currentDate:any
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
    let index =1
    if (key==='arrow') {
      index=n
    }
    else{
      console.log();
      
    }
    console.log(this.date);
    let newDate=this.date.setDate(this.date.getDate()+index)
    console.log(this.date);
    this.getDate(newDate)
  }

  ngAfterViewInit(): void {
    this.fromDate= "2023-03-8"
    this.getDate(this.fromDate)
  }

  getDate(e:any,html?:any){ 
    if(html===undefined){
      this.date=new Date(e)
      this.fromDate=e
    }else{
      this.date=new Date(e.value)
    }
    
    this.num2=this.date.getDay() 
    this.num=this.num2
    this.num1=this.num2
    this.dayNum=this.date.getDate()-this.num
    this.month=this.monthNames[this.date.getMonth()]
    this.year=this.date.getFullYear()
    this.lastDay0=new Date(this.date.getFullYear(), this.date.getMonth() , 0).getDate()
    this.lastDay1=new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate()
    this.lastDay2=new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate()
    // console.log(this.date.setDate(this.date.getDate()+2).toString() ,this.date);
    console.log(this.num2,this.num1,this.dayNum,this.date.getDate(),this.lastDay1);
    
    
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
  }
}