import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMaisProdComponent } from './ver-mais-prod.component';

describe('VerMaisProdComponent', () => {
  let component: VerMaisProdComponent;
  let fixture: ComponentFixture<VerMaisProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMaisProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerMaisProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
