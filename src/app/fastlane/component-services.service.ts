import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { forkJoin, Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComponentServicesService {
  constructor(private http: HttpClient) {}
  // getComponentData() {
  //   // let baseUrl = environment.apiUrl;
  //   return this.http.get('../assets/Data/data.Json');
  // }

  getComponentData(): Observable<any[]> {
    let component = this.http.get(`${environment.apiUrl}components`);
    let solutions = this.http.get(`${environment.apiUrl}solutions`);
    let bestPractices = this.http.get(`${environment.apiUrl}bestPractices`);
    // Observable.forkJoin (RxJS 5) changes to just forkJoin() in RxJS 6
    // let list = ['components', 'solutions', 'bestPractices'];
    return forkJoin([component, solutions, bestPractices]);
    let data = forkJoin([component, solutions, bestPractices]);
  }

  postFormData(post, type) {
    console.log(post);
    return this.http.post('http://localhost:5000/api/'+type, post);
  }
}
