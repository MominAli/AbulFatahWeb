import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookdetailsService {

  constructor() { }
  private books =
    [{ name: 'book 01', image: 'assets/img/13.jpeg' },
    { name: 'book 02', image: 'assets/img/14.jpeg' },
    { name: 'book 03', image: 'assets/img/12.jpeg' },
    { name: 'book 04', image: 'assets/img/13.jpeg' },
    { name: 'book 05', image: 'assets/img/13.jpeg' },
    { name: 'book 06', image: 'assets/img/14.jpeg' },
    { name: 'book 07', image: 'assets/img/12.jpeg' },
    { name: 'book 08', image: 'assets/img/13.jpeg' }];


  getBooks() {
    return this.books;
  }

  searchBooks(query: string) {
    console.log('start');
    if (!query) {
      return this.books;
    }
    return this.books.filter(book => book.name.toLowerCase().includes(query.toLowerCase()));
  }
}
