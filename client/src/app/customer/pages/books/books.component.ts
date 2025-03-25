import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookdetailsService } from '../../../customer/services/bookdetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from '../../../shared/components/footer/footer.component';


@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FooterComponent, CommonModule, FormsModule, NgxPaginationModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  categories: string[] = [];
  tabContent: any[] = [];
  activeTab = 0;
  searchQuery = '';
  filteredCategories: string[] = [];
  filteredTabContent: any[] = [];
  mobileTabsVisible = false;
  itemsPerPage: number = 12; // Number of items per page
  currentPage: number = 1;
  totalCategories: number = this.categories.length;
  loading: boolean = true;


  toggleMenu() {
    this.mobileTabsVisible = !this.mobileTabsVisible;
  }

  changeTab(index: number):void {
    this.activeTab = index;
    this.mobileTabsVisible = false;
  }

  books: any[] = [];
  constructor(private bookdetailsService: BookdetailsService, private router: Router) { }

  ngOnInit(): void {
    this.bookdetailsService.getBookPage().subscribe(data => {
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
