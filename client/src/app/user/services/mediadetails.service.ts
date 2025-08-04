/**
 * -------------------------------------------------------------
 * File Name    : mediadetails.service.ts
 * Description  : Service to retrieve categorized media data from local JSON
 * Author       : Khan Ramzan Ali
 * Created Date : 03-Aug-2025
 * Updated Date : 03-Aug-2025
 * Version      : 1.0.0
 * -------------------------------------------------------------
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MediadetailsService {

  private dataUrl = 'assets/localDB/media.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  getMediaList(): Observable<any> {
    console.log('Fetching media.json from:', this.dataUrl);
    return this.http.get<any>(this.dataUrl);
  }


}
