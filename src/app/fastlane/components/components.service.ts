import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  constructor(private http: HttpClient) {}

  getComponentData() {
    return this.http.get(`${environment.apiUrl}components`);
    // return this.http.get('../assets/Data/data.Json');
  }
}
