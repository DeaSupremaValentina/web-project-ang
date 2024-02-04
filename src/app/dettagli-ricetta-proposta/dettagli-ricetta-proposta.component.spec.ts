import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliRicettaPropostaComponent } from './dettagli-ricetta-proposta.component';

describe('DettagliRicettaPropostaComponent', () => {
  let component: DettagliRicettaPropostaComponent;
  let fixture: ComponentFixture<DettagliRicettaPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettagliRicettaPropostaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DettagliRicettaPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
