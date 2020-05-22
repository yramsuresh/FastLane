import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComponentServicesService {
  constructor(private http: HttpClient) {}
  getComponentData() {
    let baseUrl = window.location.host + '/Fastlane/assets/Data/data.Json'
    console.log(baseUrl)
    return this.http.get(baseUrl);
  }
}
