import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material/material.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { CutNumPipe } from './pipes/cut-num.pipe';

@NgModule({
  declarations: [
    CutNumPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MaterialModule,
    NgxPaginationModule,
    CutNumPipe
  ]
})
export class SharedModule { }
