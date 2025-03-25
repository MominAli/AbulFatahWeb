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
