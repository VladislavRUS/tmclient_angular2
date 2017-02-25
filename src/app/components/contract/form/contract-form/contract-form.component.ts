import {Component, OnInit, Input} from '@angular/core';
import {ContractService} from "../../../../services/contract.service";
import {DamperDetailedViewComponent} from "../../../../activities/damper-detailed-view/damper-detailed-view.component";

@Component({
  selector: 'contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css']
})
export class ContractFormComponent implements OnInit {

  @Input()
  private damperUuid: string;

  constructor(
    private contractService: ContractService,
    private damperDetailedView: DamperDetailedViewComponent
  ) { }

  ngOnInit() {
  }

  onSave(contractForm: any): void {
    let contract = {
      damperUuid: this.damperUuid,
      agreement: contractForm.agreement,
      customer: contractForm.customer,
      amount: contractForm.amount,
      quoter: contractForm.quoter,
      year: contractForm.year,
      prepaidNote: contractForm.prepaidNote
    };

    this.contractService.addContract(contract).subscribe(res => {
      this.damperDetailedView.loadData();
      this.damperDetailedView.toggle('contract');
      contractForm.reset();
    });
  }

}
