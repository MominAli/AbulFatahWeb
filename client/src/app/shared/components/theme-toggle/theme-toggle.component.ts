// src/app/theme-toggle/theme-toggle.component.ts
import { Component } from '@angular/core';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button class="btn btn-success" (click)="toggleTheme()">Toggle Theme</button>
  `,
  styles: [
    `
      button {
        padding: 10px 20px;
        font-size: 16px;
      }
    `,
  ],
})
export class ThemeToggleComponent {
  isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(theme);
  }
}
