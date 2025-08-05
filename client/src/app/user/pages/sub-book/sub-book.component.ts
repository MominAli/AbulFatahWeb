import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookdetailsService } from '../../services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { HeroBannerComponent } from '../../../shared/components/hero-banner/hero-banner.component';

@Component({
  selector: 'app-sub-book',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    HeroBannerComponent,
    FormsModule,
    NgxPaginationModule
  ],
  templateUrl: './sub-book.component.html',
  styleUrl: './sub-book.component.css'
})
export class SubBookComponent {
  searchQuery = '';
  itemsPerPage: number = 8;
  currentPage: number = 1;
  loading: boolean = true;

 subBook: any[] = [];
  parentTitle: string = 'Books Library';

  constructor(
    private bookdetailsService: BookdetailsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    debugger;
    const bookId = Number(this.route.snapshot.paramMap.get('bookId'));

 this.bookdetailsService.getBookList().subscribe({
  next: books => {
    console.log('Books loaded:', books);
    const bookId = Number(this.route.snapshot.paramMap.get('bookId'));
    const parent = books.find((b: { id: any; hasChildren: any; }) => Number(b.id) === bookId && b.hasChildren);

    if (parent && Array.isArray(parent.subBooks)) {
      this.subBook = parent.subBooks;
      this.parentTitle = parent.title || this.parentTitle;
    } else {
      console.warn('No sub-books found for bookId:', bookId);
      this.subBook = [];
    }

    this.loading = false;
  },
  error: err => {
    console.error('Book load error:', err);
    this.loading = false;
  }
});

  }

  downloadPDF(bookName: string): void {
    debugger;
    const pdfUrl = `../../assets/books/${bookName}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookName}.pdf`;
    link.click();
  }

  onRead(book: any): void {
    if (!book.hasChildren) {
      this.router.navigate(['/book-details', book.id]);
    }
  }

  get filteredBooks(): any[] {
    return this.subBook.filter(book =>
      book.title?.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
