import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookdetailsService } from '../../../src/app/customer/services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../src/app/shared/components/footer/footer.component';

@Component({
  selector: 'app-sub-book',
  standalone: true,
  imports: [FooterComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './sub-book.component.html',
  styleUrl: './sub-book.component.css'
})
export class SubBookComponent {

  searchQuery = '';
  mobileTabsVisible = false;
  itemsPerPage: number = 12; // Number of items per page
  currentPage: number = 1;
  loading: boolean = true;


  constructor(private bookdetailsService: BookdetailsService, private router: Router,private route: ActivatedRoute) { }

  subBookId: number = 0;
  subBook: any;

  books: any[] = [];

ngOnInit(): void {
  debugger;
  const bookId = Number(this.route.snapshot.paramMap.get('bookId'));

  this.bookdetailsService.getBookList().subscribe({
    next: books => {
      const parent = books.find((b: { id: number; hasChildren: boolean }) => b.id === bookId && b.hasChildren);

      if (parent) {
        this.subBook = parent.subBooks;
        console.log('Sub-books found:', this.subBook);  //  Now it'll log actual data
      } else {
        console.warn('No parent with children found for bookId:', bookId);
      }
    },
    error: err => console.error('Book load error:', err)
  });
}



   downloadPDF(bookName: string): void {
    const pdfUrl = `../../assets/books/${bookName}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${bookName}.pdf`;
    link.click();
  }
}
