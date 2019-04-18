import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

import { map, catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public isLoading: boolean;
  public token: string;
  public url: string;

  constructor(private _http: Http, private snackBar: MatSnackBar) {
    this.isLoading = false;
    this.url = environment.api;
  }

  public get(endpoint: string, token?: boolean) {
    const options = this.options(token);
    this.isLoading = true;

    return this._http.get(`${this.url}${endpoint}`, options).pipe(
      map(response => {
        this.isLoading = false;
        return response.json();
      }),
      catchError(error => {
        this.isLoading = false;
        this.openSnackBar(error);
        throw error;
      })
    );
  }

  public post(endpoint: string, data: any) {
    const options = this.options();
    this.isLoading = true;

    return this._http.post(`${this.url}${endpoint}`, data, options).pipe(
      map(response => {
        this.isLoading = false;
        return response.json();
      }),
      catchError(error => {
        this.isLoading = false;
        this.openSnackBar(error);
        throw error;
      })
    );
  }

  public put(endpoint: string, data: any) {
    const options = this.options();
    this.isLoading = true;

    return this._http.put(`${this.url}${endpoint}`, data, options).pipe(
      map(response => {
        this.isLoading = false;
        return response.json();
      }),
      catchError(error => {
        this.isLoading = false;
        this.openSnackBar(error);
        throw error;
      })
    );
  }

  private options(token: boolean = false) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (token) {
      headers.append('Authorization', this.token);
    }

    const options = new RequestOptions({ headers: headers });
    return options;
  }

  private openSnackBar(error: any) {
    const message = error.json().error;
    if (!message) return;

    this.snackBar.open(message.ui, 'x', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'snackBar'
    });
  }
}
