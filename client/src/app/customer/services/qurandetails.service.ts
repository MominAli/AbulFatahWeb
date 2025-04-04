import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';

export interface Surah {
  surahNumber: number;
  suranameEng: string;
  suranameArabic: string;
  imgSrc: string;
  imgAlt: string;
}

export interface Para {
  paraNumber: number;
  paraName: string;
}
export interface ddlPara {
  value: number;
  name: string;
}

export interface ddlSurah {
  value: number;
  name: string;
}
export interface ddlQari {
  value: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class QurandetailsService {

  private readonly dataUrl = 'assets/quran.json';

  constructor(private http: HttpClient) { }

  getSurahLists(): Observable<Surah[]> {
    return this.http.get<{ surahs: Surah[] }>(this.dataUrl).pipe(
      map((data) => data.surahs) // Ensure we return only the 'surahs' array
    );
  }
  
  getParaLists(): Observable<Para[]> {
    return this.http.get<{ paras: Para[] }>(this.dataUrl).pipe(
      map((data) => data.paras) // Ensure we return only the 'paras' array
    );
  }
  
  getddlParaLists(): Observable<ddlPara[]> {
    return this.http.get<{ ddlPara: ddlPara[] }>(this.dataUrl).pipe(
      map((data) => data.ddlPara) // Extract 'ddlPara' array
    );
  }
  
  getddlSurahLists(): Observable<ddlSurah[]> {
    return this.http.get<{ ddlSurah: ddlSurah[] }>(this.dataUrl).pipe(
      map((data) => data.ddlSurah) // Extract 'ddlSurah' array
    );
  }
  
  getddlQariLists(): Observable<ddlQari[]> {
    return this.http.get<{ ddlQari: ddlQari[] }>(this.dataUrl).pipe(
      map((data) => data.ddlQari) // Extract 'ddlQari' array
    );
  }
  
}
