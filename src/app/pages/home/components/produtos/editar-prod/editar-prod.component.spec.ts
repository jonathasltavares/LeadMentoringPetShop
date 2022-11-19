import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProdComponent } from './editar-prod.component';

describe('EditarProdComponent', () => {
  let component: EditarProdComponent;
  let fixture: ComponentFixture<EditarProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
