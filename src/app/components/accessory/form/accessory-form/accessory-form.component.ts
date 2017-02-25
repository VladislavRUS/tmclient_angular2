import {Component, OnInit, Input} from '@angular/core';
import {AccessoryService} from "../../../../services/accessory.service";
import {DamperDetailedViewComponent} from "../../../../activities/damper-detailed-view/damper-detailed-view.component";

@Component({
  selector: 'accessory-form',
  templateUrl: './accessory-form.component.html',
  styleUrls: ['./accessory-form.component.css']
})
export class AccessoryFormComponent implements OnInit {

  @Input()
  private damperUuid: string;

  constructor(
    private accessoryService: AccessoryService,
    private damperDetailedView: DamperDetailedViewComponent
  ) { }

  ngOnInit() {
  }

  onSave(accessoryForm): void {
    let accessory = {
      damperUuid: this.damperUuid,
      name: accessoryForm.name,
      designation: accessoryForm.designation
    };

    this.accessoryService.addAccessory(accessory).subscribe(res => {
      this.damperDetailedView.loadData();
      this.damperDetailedView.toggle('accessory');
      accessoryForm.reset();
    })
  }
}
