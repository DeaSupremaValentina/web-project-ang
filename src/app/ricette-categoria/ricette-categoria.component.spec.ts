import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicetteCategoriaComponent } from './ricette-categoria.component';

describe('RicetteCategoriaComponent', () => {
  let component: RicetteCategoriaComponent;
  let fixture: ComponentFixture<RicetteCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RicetteCategoriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RicetteCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
