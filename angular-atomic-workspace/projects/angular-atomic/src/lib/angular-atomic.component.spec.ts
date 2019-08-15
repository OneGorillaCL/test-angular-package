import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAtomicComponent } from './angular-atomic.component';

describe('AngularAtomicComponent', () => {
  let component: AngularAtomicComponent;
  let fixture: ComponentFixture<AngularAtomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAtomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAtomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
