import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComponentServicesService {
  constructor(private http: HttpClient) {}
  getComponentData() {
    return this.http.get('../assets/Data/data.Json');
  }
}
