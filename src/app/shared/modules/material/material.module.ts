import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTooltipModule,
    DragDropModule,
  ]
})
export class MaterialModule { }
