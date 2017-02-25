import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input()
  private idx: number;

  @Input()
  private item: any;

  @Input()
  private fields: string[];

  constructor() { }

  ngOnInit() {
  }

}
