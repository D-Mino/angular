import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreakpointsService {
  public isMobile: boolean;

  constructor() {
    this.isMobile = false;
  }

}
