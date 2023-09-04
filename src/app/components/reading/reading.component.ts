import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent {
  @Input() ltr :boolean = false
  reads=[
    {
      read:35,
      tit:'reading',
      img:'../../../assets/images/11.png'
    },
    {
      read:256,
      tit:'reading',
      img:'../../../assets/images/22.png'
    },
    {
      read:53,
      tit:'reading',
      img:'../../../assets/images/33.png'
    },
  ]

}
