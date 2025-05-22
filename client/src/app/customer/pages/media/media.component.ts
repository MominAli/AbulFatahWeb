import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { BookdetailsService } from '../../../customer/services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { MediadetailsService } from '../../services/mediadetails.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FooterComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  categories: string[] = [];
  tabContent: any[] = [];
  activeTab = 0;
  searchQuery = '';
  filteredCategories: string[] = [];
  filteredTabContent: any[] = [];
  mobileTabsVisible = false;
  itemsPerPage: number = 8; // Number of items per page
  currentPage: number = 1;
  totalCategories: number = this.categories.length;
  loading: boolean = true;

  toggleMenu() {
    this.mobileTabsVisible = !this.mobileTabsVisible;
  }

  changeTab(index: number) {
    this.activeTab = index;
    this.mobileTabsVisible = false;
  }

  books: any[] = [];
  constructor(
    private mediadetailsService: MediadetailsService,
     private router: Router,
     private sanitizer: DomSanitizer
    ) { }

    sanitizeUrl(url: string): SafeResourceUrl {
      console.log("Original URL:", url);
      if (url.includes("watch?v=")) {
        url = url.replace("watch?v=", "embed/");
      }
      console.log("Updated URL:", url);
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

  ngOnInit(): void {
    this.mediadetailsService.getMediaList().subscribe(data => {
      this.categories = data.categories;
      this.totalCategories = this.categories.length;
      this.loading = false; // Data loaded
      this.tabContent = data.tabContent;
      this.filteredCategories = [...this.categories];
      this.filteredTabContent = [...this.tabContent];
    });
  }

  filterResults(): any {
    const query = this.searchQuery.toLowerCase();
    this.filteredCategories = this.categories.filter(category =>
      category.toLowerCase().includes(query)
    );

    // this.filteredTabContent = this.tabContent.map(tab =>
    //   tab.filter(item => item.name.toLowerCase().includes(query))
    // );
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
