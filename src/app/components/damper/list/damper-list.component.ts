import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'damper-list',
  templateUrl: './damper-list.component.html',
  styleUrls: ['./damper-list.component.scss']
})
export class DamperListComponent implements OnInit {

  @Input()
  private dampers: any[];

  constructor() { }

  ngOnInit() {
  }
}
