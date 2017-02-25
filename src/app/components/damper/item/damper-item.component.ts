import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'damper-item',
  templateUrl: './damper-item.component.html',
  styleUrls: ['./damper-item.component.scss']
})
export class DamperItemComponent implements OnInit {

  @Input()
  private damper: any;

  @Input()
  private idx: number;

  constructor() { }

  ngOnInit() {
    console.log('Index: ' + this.idx);
  }

}
