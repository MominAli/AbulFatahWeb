import { Component, inject, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../../admin/services/account.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HasRoleDirective } from '../../../shared/directives/has-role.directive';
import { RegisterComponent } from '../../../admin/pages/register/register.component';
import { CommonModule } from '@angular/common';



// Refernce vido https://www.youtube.com/watch?v=YE2fXVFq3lo&t=1349ss
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
     CommonModule,FormsModule, BsDropdownModule,
     RouterLink, RouterLinkActive, HasRoleDirective,
     RegisterComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

@HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;

    if (window.scrollY > 100) {
      navbar.classList.add('fixed-top', 'animate');
      document.body.classList.add('has-fixed-navbar');
    } else {
      navbar.classList.remove('fixed-top', 'animate');
      document.body.classList.remove('has-fixed-navbar');
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

