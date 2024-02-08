import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicetteNomeComponent } from './ricette-nome.component';

describe('RicetteNomeComponent', () => {
  let component: RicetteNomeComponent;
  let fixture: ComponentFixture<RicetteNomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RicetteNomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RicetteNomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
