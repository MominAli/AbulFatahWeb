import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { MediadetailsService } from '../../services/mediadetails.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [LoaderComponent, FooterComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})

export class MediaComponent implements OnInit {
  categories: { title: string; label: string }[] = [];
  tabContent: { [label: string]: any[] } = {};
  filteredTabContent: { [label: string]: any[] } = {};
  activeTab = 0;
  searchQuery = '';
  itemsPerPage = 8;
currentPages: { [label: string]: number } = {};
  totalCategories = 0;
  mobileTabsVisible = false;
  loading = true;

  constructor(
    private mediadetailsService: MediadetailsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    debugger;
    this.mediadetailsService.getMediaList().subscribe(data => {
      this.categories = data.categories;
      this.tabContent = this.initializeItems(data.tabContent);
      this.filteredTabContent = { ...this.tabContent };
      this.totalCategories = this.categories.length;
      this.categories.forEach(cat => {
  this.currentPages[cat.label] = 1;
});
      this.loading = false;
    });
  }

  initializeItems(content: { [label: string]: any[] }): { [label: string]: any[] } {
    const initialized: { [label: string]: any[] } = {};
    for (const key in content) {
      initialized[key] = content[key].map(item => ({
        ...item,
        loaded: false
      }));
    }
    return initialized;
  }

  changeTab(index: number): void {
    this.activeTab = index;
    this.mobileTabsVisible = false;
    // this.currentPage = 1;
  }

  toggleMenu(): void {
    this.mobileTabsVisible = !this.mobileTabsVisible;
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    if (url.includes('watch?v=')) {
      url = url.replace('watch?v=', 'embed/');
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  extractVideoId(url: string): string {
    const match = url.match(/embed\/([^?]+)/);
    return match ? match[1] : '';
  }

  filterResults(): void {
    const query = this.searchQuery.toLowerCase();
    // this.currentPage = 1;

    this.filteredTabContent = {};
    for (const label of Object.keys(this.tabContent)) {
      this.filteredTabContent[label] = this.tabContent[label].filter(item =>
        item.name.toLowerCase().includes(query)
      );
    }
  }

  onPageChange(page: number): void {
  const activeLabel = this.categories[this.activeTab].label;
  this.currentPages[activeLabel] = page;
}

}
