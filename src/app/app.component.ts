import { Component } from '@angular/core';
import { ApiService } from '@services/api.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BreakpointsService } from '@services/breakpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public _api: ApiService,
    private _breakpoints: BreakpointsService,
    private _breakpointObserver: BreakpointObserver
  ) {
    this._breakpoints.isMobile = this._breakpointObserver.isMatched(Breakpoints.Handset);
  }
}
