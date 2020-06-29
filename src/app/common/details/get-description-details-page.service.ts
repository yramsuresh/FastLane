import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetDescriptionDetailsPageService {
  constructor(private http: HttpClient) {}

  getDescriptionFullDetailsPage(details) {
    return this.http.get(
      `${environment.apiUrl}${details.compType}/${details.Id}`
    );
  }
  getDownloadFiles(fileId) {
    console.log(fileId);
    return this.http.get(`${environment.apiUrl}download/file/${fileId}`);
  }
}
