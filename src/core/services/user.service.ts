import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor() {}

  getUserId(): string {
    return '6a6f11ba-dcba-404f-9f1e-a60d395ed354';
  }
}
