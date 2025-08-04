import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { BookdetailsService } from '../../services/bookdetails.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FooterComponent } from '../../../shared/components/footer/footer.component';


export interface SubBook {
  id: number;
  title: string;
  img: string;
}

export interface Book {
  id: number;
  title: string;
  hasChildren: boolean;
  img: string;
  subBooks: SubBook[];
}

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule,FormsModule,FooterComponent,NgxExtendedPdfViewerModule],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

constructor(private bookdetailsService: BookdetailsService) { }


ngOnInit(): void {
     this.bookdetailsService.getBookList();
  }

}
