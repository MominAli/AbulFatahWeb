/**
 * -------------------------------------------------------------
 * File Name    : theme.service.ts
 * Description  : Centralized service to manage light and dark theme toggling
 * Author       : Khan Ramzan Ali
 * Created Date : 03-Aug-2025
 * Updated Date : 03-Aug-2025
 * Version      : 1.0.0
 * -------------------------------------------------------------
 */


// src/app/services/theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private activeTheme: string = 'light-theme';

  setTheme(theme: string): void {
    this.activeTheme = theme;
    const body = document.body;
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(theme);
  }

  getTheme(): string {
    return this.activeTheme;
  }
}
