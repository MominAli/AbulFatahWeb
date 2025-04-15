import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BookdetailsService {

  private dataUrl = 'assets/books.json'; // Path to the JSON file

  constructor(private http: HttpClient) {}

  getBookPage(): Observable<any> {
    console.log('Fetching books.json from:', this.dataUrl);
    return this.http.get<any>(this.dataUrl);
  }

  getBookPage1(): Observable<any> {
    console.log('Fetching books.json from:', this.dataUrl);
    return this.http.get<any>(this.dataUrl);
  }



  private bookDetails = [
    {
      id: 1,
      name: 'Ajjaaib Ul Quran',
      author: 'Maulana Abdul Mustafa Aazmoi',
      translator: '',
      publisher: 'N/A',
      pages: 165,
      language: 'Urdu',
      category: 'Fazail',
      image: 'assets/img/11.jpeg'
    }];
  // Add more books as needed ];

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

  getBookDetail() {
    return this.bookDetails;
  }

  searchBooks(query: string) {
    console.log('start');
    if (!query) {
      return this.books;
    }
    return this.books.filter(book => book.name.toLowerCase().includes(query.toLowerCase()));
  }

  getPopularBooks() {
    // Implement logic to get popular books based on your criteria 
    return [
      { name: 'A Horrific Camel', count: 64 },
       { name: 'Mawlid Enthusiast King', count: 6 },
        { name: 'Imam Ali Raza', count: 34 }, 
        { name: 'Abd Al Qadir Al Jilani', count: 94 }
      ];
  }

}
