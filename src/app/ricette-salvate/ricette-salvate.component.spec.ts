import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicetteSalvateComponent } from './ricette-salvate.component';

describe('RicetteSalvateComponent', () => {
  let component: RicetteSalvateComponent;
  let fixture: ComponentFixture<RicetteSalvateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RicetteSalvateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RicetteSalvateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
