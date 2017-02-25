import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DamperViewComponent } from './damper-view.component';

describe('DamperViewComponent', () => {
  let component: DamperViewComponent;
  let fixture: ComponentFixture<DamperViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DamperViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DamperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
