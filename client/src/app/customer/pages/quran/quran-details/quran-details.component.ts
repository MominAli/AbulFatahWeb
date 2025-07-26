import { Component, OnInit } from '@angular/core';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ddlPara, ddlSurah,ddlQari, QurandetailsService } from '../../../../customer/services/qurandetails.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quran-details',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NgxExtendedPdfViewerModule,FooterComponent],

  templateUrl: './quran-details.component.html',
  styleUrl: './quran-details.component.css'
})
export class QuranDetailsComponent {

  ddlSurah: ddlPara[] = [];
  ddlPara: ddlSurah[] = [];
  ddlQari: ddlQari[] = [];

  selectedPara: string = '';
  selectedSurah: string = '';
  audioUrl: string = '';
  pdfUrl: string = '';


  constructor(private qurandetailsService:QurandetailsService,private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.qurandetailsService.getddlSurahLists().subscribe((data) => { this.ddlSurah = data; }); 
    this.qurandetailsService.getddlParaLists().subscribe((data) => { this.ddlPara = data; }); 
    this.qurandetailsService.getddlQariLists().subscribe((data) => { this.ddlQari = data; });
    
    this.route.queryParams.subscribe(params => {
      debugger;
        console.log('Incoming Query Params:', params);
      if (params['pdf']) {
        this.pdfUrl = params['pdf'];
      }
      if (params['audio']) {
        this.audioUrl = params['audio'];
      }
    });
   }

   onParaChange(event: any) {
    this.pdfUrl = event.target.value;
  }

    onSurahChange(event: any) {
    this.pdfUrl = event.target.value;

  }

}
