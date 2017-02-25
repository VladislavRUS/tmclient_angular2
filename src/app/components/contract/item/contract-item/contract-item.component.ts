import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.css']
})
export class ContractItemComponent implements OnInit {

  @Input()
  private contract: any;

  constructor() { }

  ngOnInit() {
  }

}
