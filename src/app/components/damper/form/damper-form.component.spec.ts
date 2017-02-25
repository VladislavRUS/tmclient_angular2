import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamperFormComponent } from './damper-form.component';

describe('DamperFormComponent', () => {
  let component: DamperFormComponent;
  let fixture: ComponentFixture<DamperFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamperFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamperFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
