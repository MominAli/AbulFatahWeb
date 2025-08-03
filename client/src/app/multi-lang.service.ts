/**
 * -------------------------------------------------------------
 * File Name    : multi-lang.service.ts
 * Description  : Signal-based multilingual service to sync UI language with ngx-translate and localStorage
 * Author       : Khan Ramzan Ali
 * Created Date : 03-Aug-2025
 * Updated Date : 03-Aug-2025
 * Version      : 1.0.0
 * -------------------------------------------------------------
 */
import { Injectable, signal, inject, effect } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MultiLangService {

  private translateService = inject(TranslateService);
  languageSingnal = signal<string>(
    window.localStorage.getItem('languageSignal') ?? "en"
  );

  updateLanguage(language: string): void {
    this.languageSingnal.update(() => {
      switch (language) {
        case "en":
          return "en";
        case "hi":
          return "hi";
        case "ur":
          return "ur";
        case "ar":
          return "ar";
        default:
          return "en";
      }
    })
  }
  constructor() {
    effect(() => {
      window.localStorage.setItem('languageSingnal', JSON.stringify(this.languageSingnal));
      this.translateService.use(this.languageSingnal());
      console.log(this.languageSingnal);
    })
  }
}
