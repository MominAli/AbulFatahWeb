import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookdetailsService } from '../../../customer/services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FooterComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  
  searchQuery = '';
  mobileTabsVisible = false;
  itemsPerPage: number = 12; // Number of items per page
  currentPage: number = 1;
  loading: boolean = true;

  books: any[] = [];
  constructor(private bookdetailsService: BookdetailsService, private router: Router) { }

  ngOnInit(): void {
    this.bookdetailsService.getBookPage().subscribe(data => {
      this.books = data.books;
      this.loading = false; // Data loaded
    });
  }

  filterResults(): any {
  }

   downloadPDF(bookName: string): void {
    const pdfUrl = `../../assets/books/${bookName}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookName}.pdf`;
    link.click();
  }


  booksDetails(book: any) {
    // Implement the function to show book details console.log(book);
    this.router.navigate(['/books-details']);
  }
  navigateToLevels(book: any): void {
    if (book.levels && book.levels.length > 0) {
      const levels = JSON.stringify(book.levels); // Convert levels array to JSON string
      this.router.navigate(['/book-level'], { queryParams: { bookName: book.name, levels: levels } });
    } else {
      // Redirect to book-details component if levels are empty
      this.router.navigate(['/books-details'], { queryParams: { bookId: book.id } });
    }
  }
  
  
  
}
