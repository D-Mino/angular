import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public local = 'localStorage';
  public session = 'sessionStorage';
  public _window = window;

  constructor() { }

  public get(key: string, isLocal: boolean = true) {
    const type = isLocal ? this.local : this.session;
    return JSON.parse(this._window[type].getItem(key));
  }

  public set(key: string, value: any, isLocal: boolean = true) {
    const type = isLocal ? this.local : this.session;
    this._window[type].setItem(key, JSON.stringify(value));
  }

  public remove(key: string, isLocal: boolean = true) {
    const type = isLocal ? this.local : this.session;
    this._window[type].removeItem(key);
  }

  public clear(isLocal: boolean = true) {
    const type = isLocal ? this.local : this.session;
    this._window[type].clear();
  }
}
