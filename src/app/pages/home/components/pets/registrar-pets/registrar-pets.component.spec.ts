import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarPetsComponent } from './registrar-pets.component';

describe('RegistrarPetsComponent', () => {
  let component: RegistrarPetsComponent;
  let fixture: ComponentFixture<RegistrarPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
