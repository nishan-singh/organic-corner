import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyOfferComponent } from './weekly-offer.component';

describe('WeeklyOfferComponent', () => {
  let component: WeeklyOfferComponent;
  let fixture: ComponentFixture<WeeklyOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeeklyOfferComponent]
    });
    fixture = TestBed.createComponent(WeeklyOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
