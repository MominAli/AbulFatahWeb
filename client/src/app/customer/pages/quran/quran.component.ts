import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Surah, Para, QurandetailsService } from '../../../customer/services/qurandetails.service';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.css'
})
export class QuranComponent {

  surahLists: Surah[] = [];
  paraLists: Para[] = [];
  loading: boolean = true;

  constructor(private router: Router, private qurandetailsService: QurandetailsService) { }

  ngOnInit(): void {
    // Fetch Surah List
    this.qurandetailsService.getSurahLists().subscribe((data) => {
      this.surahLists = data;
    });

    // Fetch Para List
    this.qurandetailsService.getParaLists().subscribe((data) => {
      this.paraLists = data;
    });
    this.loading = false; // Data loaded

  }

  goToParaDetails(item: any) {

    this.router.navigate(['/quran-details'], {
      queryParams: {
        pdf: item.pdfUrl,
        audio: item.audioUrl,
        type: item.type,     // 'surah' or 'para'
        value: item.paraNumber    // the dropdown match key
      }
    });
  }


  goToSurahDetails(item: any) {

    this.router.navigate(['/quran-details'], {
      queryParams: {
        pdf: item.pdfUrl,
        audio: item.audioUrl,
        type: item.type,     // 'surah' or 'para'
        value: item.surahNumber    // the dropdown match key
      }
    });
  }
  

}
