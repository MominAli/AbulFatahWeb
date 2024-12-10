import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookdetailsService } from '../../app/_services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  books: any[] = [];
  searchQuery = '';
  constructor(private bookdetailsService: BookdetailsService, private router: Router) { }

  ngOnInit(): void { this.books = this.bookdetailsService.getBooks(); }


  booksDetails(book: any) {
    // Implement the function to show book details console.log(book);
    this.router.navigate(['/books-details']);
  }
  searchBooks() { this.books = this.bookdetailsService.searchBooks(this.searchQuery); }
}
