import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamperDetailedViewComponent } from './damper-detailed-view.component';

describe('DamperDetailedViewComponent', () => {
  let component: DamperDetailedViewComponent;
  let fixture: ComponentFixture<DamperDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamperDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamperDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
