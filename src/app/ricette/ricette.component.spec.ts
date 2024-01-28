import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicetteComponent } from './ricette.component';

describe('RicetteComponent', () => {
  let component: RicetteComponent;
  let fixture: ComponentFixture<RicetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RicetteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RicetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
