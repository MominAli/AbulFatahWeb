import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookdetailsService } from '../../services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [LoaderComponent,HeroBannerComponent, FooterComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {

  searchQuery = '';
  mobileTabsVisible = false;
  itemsPerPage: number = 12; // Number of items per page
  currentPage: number = 1;
  loading: boolean = true;


  books: any[] = [];

  constructor(private bookdetailsService: BookdetailsService, private router: Router) { }
  ngOnInit(): void {
    this.loading = true;
    console.debug('Fetching book list...');

    this.bookdetailsService.getBookList().subscribe({
      next: (data) => {
        this.books = data;
        this.loading = false;
        console.info(` Books loaded: ${data.length} items`);
      },
      error: (err) => {
        this.loading = false;
        console.error(' Error loading book list:', err);
      }
    });
  }

  downloadPDF(bookName: string): void {
    const pdfUrl = `../../assets/books/${bookName}.pdf`;
    console.debug(`Downloading PDF: ${pdfUrl}`);

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookName}.pdf`;
    link.click();
  }

  goToSubBooks(bookId: number): void {
    console.debug(`Navigating to sub-books for Book ID: ${bookId}`);
    this.router.navigate(['/sub-book', bookId]);
  }

  onRead(book: { hasChildren: boolean; id: number }): void {
    if (!book.hasChildren) {
      console.debug(`Navigating to book details for Book ID: ${book.id}`);
      this.router.navigate(['/book-details', book.id]);
    }
  }

}

