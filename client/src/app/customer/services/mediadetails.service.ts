import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MediadetailsService {

  private dataUrl = 'assets/media.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  getMediaList(): Observable<any> {
    console.log('Fetching media.json from:', this.dataUrl);
    return this.http.get<any>(this.dataUrl);
  }


}
