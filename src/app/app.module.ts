import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import {RouterModule, Routes} from "@angular/router";
import {DamperViewComponent} from "./activities/damper-view/damper-view.component";
import {DampersService} from "./services/dampers.service";
import { DamperListComponent } from './components/damper/list/damper-list.component';
import { DamperItemComponent } from './components/damper/item/damper-item.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { DamperFormComponent } from './components/damper/form/damper-form.component';
import { DamperDetailedViewComponent } from './activities/damper-detailed-view/damper-detailed-view.component';
import { ContractListComponent } from './components/contract/list/contract-list.component';
import { ContractItemComponent } from './components/contract/item/contract-item/contract-item.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { ContractFormComponent } from './components/contract/form/contract-form/contract-form.component';
import { AccessoryFormComponent } from './components/accessory/form/accessory-form/accessory-form.component';
import {ContractService} from "./services/contract.service";
import {AccessoryService} from "./services/accessory.service";

const appRoutes: Routes = [
  { path: 'dampers', component: DamperViewComponent },
  { path: 'dampers-detailed/:uuid', component: DamperDetailedViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    DamperViewComponent,
    DamperListComponent,
    DamperItemComponent,
    FloatingButtonComponent,
    DamperFormComponent,
    DamperDetailedViewComponent,
    ContractListComponent,
    ContractItemComponent,
    ListComponent,
    ListItemComponent,
    ContractFormComponent,
    AccessoryFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    DampersService,
    ContractService,
    DamperViewComponent,
    DamperDetailedViewComponent,
    AccessoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
