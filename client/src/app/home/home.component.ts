import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { FooterComponent } from '../footer/footer.component';
import { EventsComponent } from '../events/events.component';
import { BooksComponent } from '../books/books.component';
import { MediaComponent } from '../media/media.component';
import { Router } from '@angular/router';
import { CarouselComponent } from '../components/carousel/carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [RegisterComponent,FooterComponent,EventsComponent,BooksComponent,MediaComponent,CarouselComponent]
})
export class HomeComponent {
  registerMode = false;

  constructor(private router: Router){ }

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
 
}
