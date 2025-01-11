import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InverterStringComponent } from './inverter-string.component';

describe('InverterStringComponent', () => {
  let component: InverterStringComponent;
  let fixture: ComponentFixture<InverterStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InverterStringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InverterStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
