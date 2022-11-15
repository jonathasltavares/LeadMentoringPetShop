import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDisponiveisComponent } from './prod-disponiveis.component';

describe('ProdDisponiveisComponent', () => {
  let component: ProdDisponiveisComponent;
  let fixture: ComponentFixture<ProdDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdDisponiveisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
