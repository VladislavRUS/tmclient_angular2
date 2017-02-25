import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {

  @Input()
  private contracts: any[];

  constructor() { }

  ngOnInit() {
    console.log(this.contracts);
  }

}
