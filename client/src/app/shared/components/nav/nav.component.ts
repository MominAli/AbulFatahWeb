import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../admin/services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HasRoleDirective } from '../../../shared/directives/has-role.directive';
import { RegisterComponent } from '../../../admin/pages/register/register.component';
import { MultiLangService } from '../../../multi-lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

// Refernce vido https://www.youtube.com/watch?v=YE2fXVFq3lo&t=1349ss
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    TranslateModule, CommonModule,FormsModule, BsDropdownModule,
     RouterLink, RouterLinkActive, HasRoleDirective,
     RegisterComponent,ThemeToggleComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  multiLangService = inject(MultiLangService);
  selectedLanguageName: string = 'English'; // Default language name

  
  toggleLanguage(language: string): void {
    if (this.multiLangService.languageSingnal() !== language) {
      this.multiLangService.updateLanguage(language);
      this.selectedLanguageName = this.getLanguageName(language);
      console.log('Language changed to ', language);

    }
  }
  // Method to get language name based on language code
  getLanguageName(language: string): string {
    const languageNames: { [key: string]: string } = {
      en: 'English',
      ur: 'Urdu',
      hi: 'Hindi',
      ar: 'Arabic'
    };
    return languageNames[language] || 'Unknown';
  }
  
  // Method to get CSS class for language icons
  getLanguageIconClass(language: string): string {
    const languageIcons: { [key: string]: string } = {
      en: 'fi-us',
      ur: 'fi-pk',
      hi: 'fi-in',
      ar: 'fi-sa'
    };
    return languageIcons[language] || '';
  }
  
  accountService = inject(AccountService);
  private router = inject(Router)
  private toastr = inject(ToastrService);
  model: any = {};

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => {
        this.router.navigateByUrl('/members')
      },
      error: error => this.toastr.error(error.error)
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }

  registerMode = false;

  registerToggle() {
    this.registerMode = !this.registerMode
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
  isNavbarCollapsed = true;

  closeNavbar() {
    this.isNavbarCollapsed = true;
  }
}

