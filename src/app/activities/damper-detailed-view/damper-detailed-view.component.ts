import {Component, OnInit, Injectable} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DampersService} from "../../services/dampers.service";
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-damper-detailed-view',
  templateUrl: './damper-detailed-view.component.html',
  styleUrls: ['./damper-detailed-view.component.scss']
})
@Injectable()
export class DamperDetailedViewComponent implements OnInit {

  private damperUuid: string;

  private contractFormOpened: boolean = false;
  private accessoryFormOpened:boolean = false;

  private contractHeaders: string[];
  private contractFields: string[];

  private accessoriesHeaders: string[];
  private accessoriesFields: string[];

  private damper: any;
  private form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private damperService: DampersService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      'name': '',
      'designation': '',
      'expirationDate': ''
    });

    this.contractHeaders = [
      'Договор, дополнительное соглашение',
      'Заказчик',
      'Квартал',
      'Год',
      'Отметка об авансировании'
    ];

    this.contractFields = [
      'agreement',
      'customer',
      'quoter',
      'year',
      'prepaidNote'
    ];

    this.accessoriesHeaders = [
      'Наименование',
      'Обозначение'
    ];

    this.accessoriesFields = [
      'name',
      'designation'
    ];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.route.params.subscribe(p => {
      this.damperService.getDampers().subscribe(dampers => {
        this.damper = dampers.filter(d => d.uuid == p['uuid'])[0];
        this.damperUuid = this.damper['uuid'];

        this.form.patchValue(
          {
            name: this.damper['name'],
            designation: this.damper['designation'],
            expirationDate: this.damper['expirationDate']
          });
      })
    });
  }

  getDamper(): any {
    return this.damper;
  }

  getContracts(): any[] {
    return this.damper ? this.damper['contracts'] : [];
  }

  getAccessories(): any[] {
    return this.damper ? this.damper['accessories'] : [];
  }

  toggle(what:string): void {
    switch (what) {
      case 'contract': {
        this.contractFormOpened = !this.contractFormOpened;
        break;
      }
      case 'accessory': {
        this.accessoryFormOpened = !this.accessoryFormOpened;
        break;
      }
    }
  }

  onUpdate(): void {
    var damper = {

    }
  }
}
