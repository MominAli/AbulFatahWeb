import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  constructor(private router: Router){ }

  booksDetails()
  {
     this.router.navigate(['/books-details']);
  }
}
