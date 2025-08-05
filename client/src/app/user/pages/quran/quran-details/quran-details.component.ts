import { Component, OnInit } from '@angular/core';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ddlPara, ddlSurah, ddlQari, QurandetailsService, Surah, Para } from '../../../services/qurandetails.service';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { HeroBannerComponent } from '../../../../shared/components/hero-banner/hero-banner.component';
@Component({
  selector: 'app-quran-details',
  standalone: true,
  imports: [LoaderComponent,HeroBannerComponent, CommonModule, RouterOutlet, NgxExtendedPdfViewerModule, FooterComponent,FormsModule],

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

  loading: boolean = true;


  constructor(private qurandetailsService: QurandetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.loading = true;

  // Run all data fetches in parallel and wait for completion
  forkJoin({
    ddlSurah: this.qurandetailsService.getddlSurahLists(),
    ddlPara: this.qurandetailsService.getddlParaLists(),
    ddlQari: this.qurandetailsService.getddlQariLists(),
    surahLists: this.qurandetailsService.getSurahLists(),
    paraLists: this.qurandetailsService.getParaLists()
  }).subscribe({
    next: (result) => {
      this.ddlSurah = result.ddlSurah;
      this.ddlPara = result.ddlPara;
      this.ddlQari = result.ddlQari;
      this.surahLists = result.surahLists;
      this.paraLists = result.paraLists;
    },
    error: (err) => {
      console.error('Error loading Quran lists:', err);
    },
    complete: () => {
      this.loading = false;
    }
  });

  // Handle route query parameters separately
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
