import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamperListComponent } from './damper-list.component';

describe('DamperListComponent', () => {
  let component: DamperListComponent;
  let fixture: ComponentFixture<DamperListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamperListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
