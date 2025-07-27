import { Component, OnInit } from '@angular/core';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ddlPara, ddlSurah, ddlQari, QurandetailsService, Surah, Para } from '../../../../customer/services/qurandetails.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-quran-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgxExtendedPdfViewerModule, FooterComponent,FormsModule],

  templateUrl: './quran-details.component.html',
  styleUrl: './quran-details.component.css'
})
export class QuranDetailsComponent {

  ddlSurah: ddlPara[] = [];
  ddlPara: ddlSurah[] = [];
  ddlQari: ddlQari[] = [];
  surahLists: Surah[] = [];
  paraLists: Para[] = [];

  selectedPara: string ='';
  selectedSurah: string = '';
  audioUrl: string = '';
  pdfUrl: string = '';


  constructor(private qurandetailsService: QurandetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.qurandetailsService.getddlSurahLists().subscribe((data) => { this.ddlSurah = data; });
    this.qurandetailsService.getddlParaLists().subscribe((data) => { this.ddlPara = data; });
    this.qurandetailsService.getddlQariLists().subscribe((data) => { this.ddlQari = data; });

    // Fetch Surah List
    this.qurandetailsService.getSurahLists().subscribe((data) => {
      this.surahLists = data;
    });

    // Fetch Para List
    this.qurandetailsService.getParaLists().subscribe((data) => {
      this.paraLists = data;
    });
debugger;
    this.route.queryParams.subscribe(params => {
      this.pdfUrl = params['pdf'] || '';
      this.audioUrl = params['audio'] || '';
      const selectedType = params['type'];
      const selectedValue = params['value'];

      if (selectedType === 'para') {
        this.selectedPara = selectedValue;
      } else if (selectedType === 'surah') {
        this.selectedSurah = selectedValue;
      }
    });


  }

  onParaChange(event: any) {
    const selected = this.paraLists.find(p => p.paraNumber === event.target.value);
    if (selected) {
      this.pdfUrl = selected.pdfUrl;
      this.audioUrl = selected.audioUrl;
      this.selectedPara = selected.paraNumber.toString();
    }
     this.selectedSurah='';
  }

  onSurahChange(event: any) {
    const selected = this.surahLists.find(s => s.surahNumber === event.target.value);
    if (selected) {
      this.pdfUrl = selected.pdfUrl;
      this.audioUrl = selected.audioUrl;
      this.selectedSurah = selected.surahNumber.toString();
    }
    this.selectedPara='';

  }


}
