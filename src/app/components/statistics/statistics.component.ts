import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
  @Input() ltr :boolean = false
  device='device'
  deviceNum=158
  rates={r1:57,r2:37}
  
}
