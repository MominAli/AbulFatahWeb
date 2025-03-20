import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BookdetailsService } from '../../app/_services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, FormsModule,NgxPaginationModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  categories = ['Al Munazrat', 'Quran-o-Tafseer', 'Hadees-o-Usool-e-Hadees', 'Fiqh-o-Usool-e-Fiqh', 'Seerat', 'Tasawwuf'];
  tabContent = [
    [
      { img: '../../assets/img/11.jpeg', name: ' section 01' },
      { img: '../../assets/img/12.jpeg', name: ' section 01' },
      { img: '../../assets/img/13.jpeg', name: ' section 01' },
      { img: '../../assets/img/14.jpeg', name: ' section 01' },
      { img: '../../assets/img/15.jpeg', name: ' section 01' },
    ],
    [
      { img: '../../assets/img/17.jpeg', name: ' section 02' },
      { img: '../../assets/img/18.jpeg', name: ' section 02' },
      { img: '../../assets/img/19.jpeg', name: ' section 02' },
      { img: '../../assets/img/20.jpeg', name: ' section 02' }
    ],
    [
      { img: '../../assets/img/11.jpeg', name: ' section 03' },
      { img: '../../assets/img/14.jpeg', name: ' section 03' }
    ],
    [
      { img: '../../assets/img/14.jpeg', name: ' Mirate Husne Be Misal' }
    ],
    [
      { img: '../../assets/img/13.jpeg', name: ' Mirate Husne Be Misal' },
      { img: '../../assets/img/14.jpeg', name: ' Mirate Husne Be Misal' }
    ],
    [
      { img: '../../assets/img/11.jpeg', name: ' Mirate Husne Be Misal' },
      { img: '../../assets/img/13.jpeg', name: ' Mirate Husne Be Misal' },
    ],
    [
      { img: '../../assets/img/18.jpeg', name: ' Mirate Husne Be Misal' },
      { img: '../../assets/img/16.jpeg', name: ' Mirate Husne Be Misal' }
    ],
    
  ];
  activeTab = 0;
  mobileTabsVisible = false;

    // Pagination properties
    itemsPerPage: number = 4; // Number of items per page
    currentPage: number = 2;

    // Total categories
    totalCategories: number = this.categories.length;

    searchQuery = ''; // To bind the search input
    filteredCategories = [...this.categories]; // Filtered categories
    filteredTabContent = [...this.tabContent]; // Filtered tab content
  

  toggleMenu() {
    this.mobileTabsVisible = !this.mobileTabsVisible;
  }

  changeTab(index: number) {
    this.activeTab = index;
    this.mobileTabsVisible = false;
  }
  
  books: any[] = [];
  constructor(private bookdetailsService: BookdetailsService, private router: Router) { }

  ngOnInit(): void {
  }


  booksDetails(book: any) {
    // Implement the function to show book details console.log(book);
    this.router.navigate(['/books-details']);
  }
  filterResults() {
    debugger;
    const query = this.searchQuery.toLowerCase();

    // Filter categories
    this.filteredCategories = this.categories.filter((category) =>
      category.toLowerCase().includes(query)
    );

    // Filter books (update for each tab's content if needed)
    this.filteredTabContent = this.tabContent.map((tab) =>
      tab.filter((item) => item.name.toLowerCase().includes(query))
    );
  }
  onPageChange(event: number) {
        this.currentPage = event; // Update the current page when pagination changes
    }
}
