import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { forkJoin, Observable } from 'rxjs';
import { AuthenticationService } from '../_services';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ComponentServicesService {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {}
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
    return this.http.post('http://localhost:5000/api/'+type, post);
  }

  deleteItem(id,type){
    return this.http.delete('http://localhost:5000/api/'+type +'/' +id)
  }

  uploadFile(fileData){
    let endPoint = null;
    const formData = new FormData();
    const baseUrl = 'http://localhost:5000/api/uploads'
    if(fileData.type === 'image'){
      formData.append('image', fileData.image);
      endPoint = baseUrl+'/image';
    } else {
      formData.append('file', fileData.file);
      endPoint = baseUrl+'/file';
      formData.append('linkText', fileData.linkText);
    }
    formData.append('entity', fileData.entity);
    formData.append('entityId', fileData.entityId);
    const headers = new HttpHeaders({
      'x-access-token': this.authenticationService.currentUserValue
        .token
    });
    return this.http.post(endPoint, formData, {headers});
  }
}
