import { TestBed } from '@angular/core/testing';

import { EvaluationHttpService } from './evaluation-http.service';

describe('EvaluationHttpService', () => {
  let service: EvaluationHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
