import { TestBed, inject } from '@angular/core/testing';
import { MessageService } from './MessageService.service';

describe('Service: MessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService]
    });
  });

  it('should ...', inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
