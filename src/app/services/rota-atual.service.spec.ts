import { TestBed } from '@angular/core/testing';

import { RotaAtualService } from './rota-atual.service';

describe('RotaAtualService', () => {
  let service: RotaAtualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotaAtualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
