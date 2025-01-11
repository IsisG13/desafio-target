import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturamentoEstadoComponent } from './faturamento-estado.component';

describe('FaturamentoEstadoComponent', () => {
  let component: FaturamentoEstadoComponent;
  let fixture: ComponentFixture<FaturamentoEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaturamentoEstadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaturamentoEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
