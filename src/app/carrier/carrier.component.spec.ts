import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierComponent } from './carrier.component';

describe('CarrierComponent', () => {
  let component: CarrierComponent;
  let fixture: ComponentFixture<CarrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
