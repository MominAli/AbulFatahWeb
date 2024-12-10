import { Component } from '@angular/core';
import { BookdetailsService } from '../_services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

interface BookData {
  id: number; name: string; author: string;
  translator: string; publisher: string;
  pages: number; language: string;
  category: string; image: string;
}

interface PopularBook {
  name: string; count: number;
}
@Component({
  selector: 'app-books-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './books-details.component.html',
  styleUrl: './books-details.component.css'
})
export class BooksDetailsComponent {

  bookDetails: BookData[] = [];
  popularBooks: PopularBook[] = [];

  constructor(private bookdetailsService: BookdetailsService) { }
  ngOnInit(): void {
    this.bookDetails = this.bookdetailsService.getBookDetail();
    this.popularBooks = this.bookdetailsService.getPopularBooks();
  }

}
