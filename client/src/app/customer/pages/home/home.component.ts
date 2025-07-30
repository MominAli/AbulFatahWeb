import { Component } from '@angular/core';
import { RegisterComponent } from "../../../admin/pages/register/register.component";
import { FooterComponent } from '../../../shared/components/footer/footer.component';

import { EventsComponent } from '../events/events.component';
import { MediaComponent } from '../media/media.component';
import { Router } from '@angular/router';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RegisterComponent,FooterComponent,EventsComponent,MediaComponent,CarouselComponent]
})
export class HomeComponent {
  registerMode = false;
  loading: boolean = true;

  constructor(private router: Router){ }

  ngOnInit(): void {
      this.loading = false; // Data loaded
    }

  registerToggle() {
    this.registerMode = !this.registerMode
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  goToBooks() {
    this.router.navigate(['/books']);
  }
  goToMedia() {
    this.router.navigate(['/media']);
  }
  goToQuran() {
    this.router.navigate(['/quran']);
  }
  goToManqabat() {
    this.router.navigate(['/media']);
  }
  goToFeedBack() {
    this.router.navigate(['/feedback']);
  }
  goToDonation() {
    this.router.navigate(['/donation']);
  }
  goToBiograhpy() {
    this.router.navigate(['/biograhpy']);
  }
  
}
