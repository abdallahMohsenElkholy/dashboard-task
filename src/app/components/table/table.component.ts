import {AfterViewInit, Component, ViewChild, OnInit, Input} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatSort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit ,OnInit{

  days=['Sat','Sun','Mon','Tue','Wed','Thu','Fri']
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @Input() ltr :boolean = false
  pageSize = 5; // Number of items to show per page
  pageSizeOptions = [5, 10, 25, 50]; // Available options for items per page
  currentPage = 1; // Current page number
  displayedColumns: string[] = ['id', 'fullName', 'email', 'daysOfWork','files','setting'];
  heads: string[] = ['id', 'fullName', 'email', 'daysOfWork','files'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  show='show'
  from='from'
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    let label=document.querySelector('.mat-mdc-paginator-page-size-label');
    let label2=document.querySelector('.mat-mdc-paginator-range-label');
    let p = document.createElement('p')
    let p2 = document.createElement('span')
    p.append(this.show)
    p2.append(this.from + ' '+ELEMENT_DATA.length)
    p.classList.add('pagLab')

    label!.innerHTML=''
    label2!.innerHTML=''
    label!.appendChild(p)
    label2!.appendChild(p2)
  }
  
  ngOnInit(): void {
    // this.dataSource.sort = this.sort;
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getDisplayedPageNumbers(): number[] {
    const pageCount = Math.ceil(this.dataSource.data.length / this.pageSize);
    const currentPageIndex = this.currentPage + 1;
    const displayedPageNumbers = [];

    if (pageCount <= 5) {
      for (let i = 1; i <= pageCount; i++) {
        displayedPageNumbers.push(i);
      }
    } else {
      if (currentPageIndex <= 3) {
        displayedPageNumbers.push(1, 2, 3, 4, 5);
      } else if (currentPageIndex >= pageCount - 2) {
        displayedPageNumbers.push(pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount);
      } else {
        displayedPageNumbers.push(currentPageIndex - 2, currentPageIndex - 1, currentPageIndex, currentPageIndex + 1, currentPageIndex + 2);
      }
    }

    return displayedPageNumbers;
  }

  colonShowAndHide(colName:string){
    let index ;
    let i ;
    if (this.displayedColumns.includes(colName)) {
      index = this.displayedColumns.indexOf(colName)
      this.displayedColumns.splice(index,1)
    }else{
      i = this.displayedColumns.indexOf('setting')
      this.displayedColumns.splice(i,1)
      index = this.heads.indexOf(colName)
      this.displayedColumns.splice(index,0,colName)
      this.displayedColumns.push('setting')
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (!this.ltr) {
      event.previousIndex=Math.abs(event.previousIndex-this.displayedColumns.length+2)
      event.currentIndex=Math.abs(event.currentIndex-this.displayedColumns.length+2)
    }
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
    console.log (event.previousIndex, event.currentIndex)
  }

  getPaginatedData(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.dataSource.data.slice(startIndex, endIndex);
  }

  changePageSize(newPageSize: any) {    
    this.currentPage = 0;
    this.paginator.pageSize = newPageSize.value;
    this.dataSource.data = [...this.dataSource.data]
  }

  filter(e:number){
    this.dataSource.data.sort((a:any,b:any)=>{
      let nameA
      let nameB
      if (e===1) {
        nameA = a.id.toLowerCase();
        nameB = b.id.toLowerCase();
      }else{
        nameA = a.fullName.toLowerCase();
        nameB = b.fullName.toLowerCase();
      }
      if (nameA < nameB) {
        return -1; // nameA comes before nameB
      }
    
      if (nameA > nameB) {
        return 1; // nameA comes after nameB
      }
    
      return 0; 
    })
    this.ngOnInit()
  }

  changePage(pageNum: number) {
    this.currentPage = pageNum;
    this.paginator.pageIndex = pageNum;
    this.dataSource.data = [...this.dataSource.data]
  }

  goNext() {
    if(this.currentPage !== this.getDisplayedPageNumbers().length - 1) {
      this.currentPage = this.currentPage + 1;
      this.paginator.pageIndex = this.currentPage;
      this.dataSource.data = [...this.dataSource.data]
    }
  }

  goPrev() {
    if(this.currentPage !== 0) {
      this.currentPage = this.currentPage - 1;
      this.paginator.pageIndex = this.currentPage;
      this.dataSource.data = [...this.dataSource.data]
    }
  }
}

export interface PeriodicElement {
  fullName: string;
  id: string;
  daysOfWork: number[];
  email: string;
  files: object[];
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'ID-42342', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'QExample@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-64653', fullName: 'بيل إفتراضي جديد مثال ', daysOfWork:[2,1,4], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-2674', fullName: 'إسفقم إفتراضي جديد مثال ', daysOfWork: [0,1,4], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-3576', fullName: 'إسققم إفتراضي جديد مثال ', daysOfWork:[0,1,4], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-457768', fullName: 'سيب إفتراضي جديد مثال ', daysOfWork: [0,1,4], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-16756747', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [0,1,4], email: 'QExample@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-264264', fullName: 'قا إفتراضي جديد مثال ', daysOfWork:[2,1,6], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-64656', fullName: 'إساايم إفتراضي جديد مثال ', daysOfWork: [2,1,6], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-26546', fullName: 'فغف إفتراضي جديد مثال ', daysOfWork:[2,1,6], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-644634', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [2,1,6], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-3636', fullName: 'اب إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'QExample@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-64656', fullName: 'إساايم إفتراضي جديد مثال ', daysOfWork: [2,1,6], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-26546', fullName: 'فغف إفتراضي جديد مثال ', daysOfWork:[2,1,6], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-644634', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [2,1,6], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-3636', fullName: 'اب إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'QExample@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'إسرلاام إفتراضي جديد مثال ', daysOfWork:[2,1,4], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-343534', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork:[2,1,4], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'قفثق إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'QExample@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'بيق إفتراضي جديد مثال ', daysOfWork:[2,1,4], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'يبلق إفتراضي جديد مثال ', daysOfWork:[2,1,4], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'Example@company.com' ,files:[{size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
  {id: 'ID-15877', fullName: 'إسم إفتراضي جديد مثال ', daysOfWork: [2,1,4], email: 'Example@company.com' ,files:[{img:'assets/images/file.png',size:"9mb . PDF",fileName:"واجهة المستخدم .png"}]},
];
