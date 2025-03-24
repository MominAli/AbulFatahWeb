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

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TranslateModule, CommonModule ,FormsModule, BsDropdownModule, RouterLink, RouterLinkActive, HasRoleDirective, RegisterComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  multiLangService = inject(MultiLangService);

  toggleLanguage(language: string): void {
    if (this.multiLangService.languageSingnal() !== language) {
      this.multiLangService.updateLanguage(language);
      console.log('Language changed to ', language);
    }
  }
  getLanguageIconClass(language: string): string {
    switch (language) {
      case "en":
        return "fi fi-us";
      case "fr":
        return "fi i-fr";
      case "es":
        return "fi fi-es";
      case "ru":
        return "fi fi-ru";
      default:
        return "fi fi-us";
    }
  }
  getLanguageName(langName: string): string {
    switch (langName) {
      case "en":
        return "English";
      case "fr":
        return "French";
      case "es":
        return "Spanish";
      case "ru":
        return "Russian";
      default:
        return "English";
    }
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

