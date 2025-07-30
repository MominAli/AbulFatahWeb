import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookdetailsService } from '../../../src/app/customer/services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../src/app/shared/components/footer/footer.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [FooterComponent, CommonModule, FormsModule, NgxPaginationModule],
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
    this.bookdetailsService.getBookList().subscribe({
      next: data => {
        this.books = data;
        console.log('Books loaded:', data);
      },
      error: err => {
        console.error('Error loading books:', err);
      }
    });
    console.log(this.books);
  }


  downloadPDF(bookName: string): void {
    const pdfUrl = `../../assets/books/${bookName}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookName}.pdf`;
    link.click();
  }

}
