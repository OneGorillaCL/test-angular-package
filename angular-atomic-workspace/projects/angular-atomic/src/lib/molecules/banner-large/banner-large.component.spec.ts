import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerLargeComponent } from './banner-large.component';

describe('BannerLargeComponent', () => {
  let component: BannerLargeComponent;
  let fixture: ComponentFixture<BannerLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
