import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicetteProposteComponent } from './ricette-proposte.component';

describe('RicetteProposteComponent', () => {
  let component: RicetteProposteComponent;
  let fixture: ComponentFixture<RicetteProposteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RicetteProposteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RicetteProposteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
