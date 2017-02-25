import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamperItemComponent } from './damper-item.component';

describe('DamperItemComponent', () => {
  let component: DamperItemComponent;
  let fixture: ComponentFixture<DamperItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamperItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamperItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
