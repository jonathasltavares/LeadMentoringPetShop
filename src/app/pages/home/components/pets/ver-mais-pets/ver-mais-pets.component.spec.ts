import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMaisPetsComponent } from './ver-mais-pets.component';

describe('VerMaisPetsComponent', () => {
  let component: VerMaisPetsComponent;
  let fixture: ComponentFixture<VerMaisPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMaisPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMaisPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
