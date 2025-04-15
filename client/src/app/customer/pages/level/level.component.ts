import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookdetailsService } from '../../services/bookdetails.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-level',
  standalone: true,
  imports: [CommonModule,NgxPaginationModule],
  templateUrl: './level.component.html',
  styleUrl: './level.component.css'
})
export class LevelComponent {
  bookName!: string;
  levels: string[] = [];

  searchQuery = '';
  mobileTabsVisible = false;
  itemsPerPage: number = 12; // Number of items per page
  currentPage: number = 1;
  loading: boolean = true;

  books: any[] = [];
  

  constructor(
    private route: ActivatedRoute ,
    private bookdetailsService: BookdetailsService,
    private router:Router
  ) {}

  ngOnInit(): void {
    // Retrieve data from route query parameters
    this.route.queryParams.subscribe(params => {
      this.bookName = params['bookName'] || 'Unknown Book';
      this.levels = JSON.parse(params['levels'] || '[]'); // Parse levels passed as JSON string
    });

    this.bookdetailsService.getBookPage1().subscribe(data => {
      this.books = data.books;
      console.log(this.books)
      this.loading = false; // Data loaded
    });

    
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
}