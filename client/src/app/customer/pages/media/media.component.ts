import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BookdetailsService } from '../../../customer/services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FooterComponent, CommonModule, FormsModule,NgxPaginationModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  categories = [
    'Naat',
    'Bayan',
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani',
    'Jumada al-Awwal', 'Jumada al-Thani','Rajab','Shaban',
    'Ramadan','Shawwal','Dhu al-Qadah','Dhu al-Hijjah','Old Bayan',];
  tabContent = [
    [
      { img: '../../assets/img/11.jpeg', name: 'book_01' ,url:'https://www.youtube.com/watch?v=tYw6MCuZazs'},
      { img: '../../assets/img/12.jpeg', name: 'book_02' ,url:'https://www.youtube.com/watch?v=tYw6MCuZazs'},
      { img: '../../assets/img/13.jpeg', name: 'book_03' ,url:'https://www.youtube.com/watch?v=tYw6MCuZazs'},
      { img: '../../assets/img/14.jpeg', name: 'book_04' ,url:'https://www.youtube.com/watch?v=tYw6MCuZazs'},
      { img: '../../assets/img/15.jpeg', name: 'book_05' ,url:'https://www.youtube.com/watch?v=tYw6MCuZazs'},
      { img: '../../assets/img/16.jpeg', name: 'book_06' ,url:'https://www.youtube.com/watch?v=tYw6MCuZazs'}

    ]
  ];
  activeTab = 0;
  mobileTabsVisible = false;

    // Pagination properties
    itemsPerPage: number = 8; // Number of items per page
    currentPage: number = 1;

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


    filterResults() {
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
    redirectToVideo(url: string): void {
      if (url) {
        window.open(url, '_blank'); // Opens the YouTube video in a new tab
      }
    }
}
