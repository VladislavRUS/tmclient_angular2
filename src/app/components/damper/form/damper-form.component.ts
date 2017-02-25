import {Component, OnInit, trigger, state, style, transition, animate, Input} from '@angular/core';
import {DampersService} from "../../../services/dampers.service";
import {DamperViewComponent} from "../../../activities/damper-view/damper-view.component";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'damper-form',
  templateUrl: './damper-form.component.html',
  styleUrls: ['./damper-form.component.scss'],
  animations: [
    trigger('formState', [
      state('active', style({
        opacity: '1',
        height: '*',
        visibility: 'visible'
      })),
      state('inactive', style({
        opacity: '0',
        height: '0',
        visibility: 'hidden'
      })),
      transition('active => inactive', animate('200ms ease-out')),
      transition('inactive => active', animate('200ms ease-in'))
    ])
  ]
})
export class DamperFormComponent implements OnInit {

  @Input()
  private opened: boolean;

  constructor(
    private damperService: DampersService,
    private damperView: DamperViewComponent
  ) { }

  ngOnInit() {
  }

  getState(): string {
    return this.opened ? 'active' : 'inactive'
  }

  onSave(damperForm: any): void {

    let damper = {
      name: damperForm.name,
      designation: damperForm.designation,
      expirationDate: damperForm.expirationDate
    };

    this.damperService.addDamper(damper).subscribe(res => {
      this.damperView.loadDampers();
      this.damperView.toggleForm();
      damperForm.reset();
    })
  }
}
