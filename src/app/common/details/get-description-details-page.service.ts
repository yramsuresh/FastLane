import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  // getDownloadFiles(fileId) {
  //   console.log(fileId);
  //   return this.http.get(`${environment.apiUrl}download/file/${fileId}`);
  // }
  getDownloadFiles(fileId): Observable<Blob> {
    return this.http
      .get(`${environment.apiUrl}download/file/${fileId}`, {
        responseType: 'blob',
      })
      .pipe(
        tap(
          // Log the result or error
          (data) => console.log('You received data'),
          (error) => console.log(error)
        )
      );
    // let options = new RequestOptions({
    //   responseType: ResponseContentType.Blob,
    // });
    // return this.http
    //   .get(`${environment.apiUrl}download/file/${fileId}`, options)
    //   .pipe(map((res) => res.blob()));
  }
}
