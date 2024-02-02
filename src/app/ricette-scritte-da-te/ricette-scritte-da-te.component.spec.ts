import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicetteScritteDaTeComponent } from './ricette-scritte-da-te.component';

describe('RicetteScritteDaTeComponent', () => {
  let component: RicetteScritteDaTeComponent;
  let fixture: ComponentFixture<RicetteScritteDaTeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RicetteScritteDaTeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RicetteScritteDaTeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
