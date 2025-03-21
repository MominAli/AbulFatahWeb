import { Component, OnInit } from '@angular/core';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ddlPara, ddlSurah,ddlQari, QurandetailsService } from '../../../../customer/services/qurandetails.service';

@Component({
  selector: 'app-quran-details',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NgxExtendedPdfViewerModule],

  templateUrl: './quran-details.component.html',
  styleUrl: './quran-details.component.css'
})
export class QuranDetailsComponent {

  ddlSurah: ddlPara[] = [];
  ddlPara: ddlSurah[] = [];
  ddlQari: ddlQari[] = [];

  constructor(private qurandetailsService:QurandetailsService){ }

  ngOnInit(): void {
    this.qurandetailsService.getddlParaLists().subscribe((data) => { this.ddlSurah = data; }); 
    this.qurandetailsService.getddlParaLists().subscribe((data) => { this.ddlPara = data; }); 
    this.qurandetailsService.getddlQariLists().subscribe((data) => { this.ddlQari = data; }); 
   }

}
