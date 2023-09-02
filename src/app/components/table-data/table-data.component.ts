import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent {
  @Input() ltr :boolean = false
  heads:string[] = ['sad','id' , 'name']

  drop(event: CdkDragDrop<string[]>) {
    console.log(this.heads, event.previousIndex, event.currentIndex);
    moveItemInArray(this.heads, event.previousIndex, event.currentIndex);

  }
}
