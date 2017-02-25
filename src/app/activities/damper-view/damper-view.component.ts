import {Component, OnInit, state, style, trigger, transition, animate} from '@angular/core';
import {DampersService} from "../../services/dampers.service";

@Component({
  selector: 'damper-view',
  templateUrl: './damper-view.component.html',
  styleUrls: ['./damper-view.component.scss'],
  animations: [
    trigger('formState', [
      state('active', style({
        opacity: '0',
        height: '0'
      })),
      state('inactive', style({
        opacity: '1',
        height: 'auto'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class DamperViewComponent implements OnInit {

  private dampers: any[];
  private dialogOpened: boolean = false;

  constructor(private dampersService: DampersService) {
  }

  ngOnInit() {
    this.loadDampers();
  }

  loadDampers(): void {
    this.dampersService.getDampers().subscribe(dampers => this.dampers = dampers);
  }

  toggleForm(): void {
    this.dialogOpened = !this.dialogOpened;
  }
}
