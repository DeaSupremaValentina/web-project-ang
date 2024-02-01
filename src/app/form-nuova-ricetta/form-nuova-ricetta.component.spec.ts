import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuovaRicettaComponent } from './form-nuova-ricetta.component';

describe('FormNuovaRicettaComponent', () => {
  let component: FormNuovaRicettaComponent;
  let fixture: ComponentFixture<FormNuovaRicettaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormNuovaRicettaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNuovaRicettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
