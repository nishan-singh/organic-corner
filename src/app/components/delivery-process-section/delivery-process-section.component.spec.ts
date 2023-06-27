import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryProcessSectionComponent } from './delivery-process-section.component';

describe('DeliveryProcessSectionComponent', () => {
  let component: DeliveryProcessSectionComponent;
  let fixture: ComponentFixture<DeliveryProcessSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryProcessSectionComponent]
    });
    fixture = TestBed.createComponent(DeliveryProcessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
