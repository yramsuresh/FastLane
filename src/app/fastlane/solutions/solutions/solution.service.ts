import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SolutionService {
  constructor(private http: HttpClient) {}

  getComponentData() {
    return this.http.get(`${environment.apiUrl}solutions`);
    // return this.http.get('../assets/Data/data.Json');
  }
}