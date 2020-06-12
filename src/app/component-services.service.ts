import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComponentServicesService {
  constructor(private http: HttpClient) {}
  getComponentData() {
    let baseUrl = environment.apiUrl;
    return this.http.get(baseUrl);
  }
  postFormData(post) {
    console.log(post);
    return this.http.post('http://localhost:5000/api/create-tile', post);
  }
}
