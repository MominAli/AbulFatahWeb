import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Surah, Para, QurandetailsService } from '../../services/qurandetails.service';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [FooterComponent, CommonModule,LoaderComponent],
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.css'
})
export class QuranComponent {

  surahLists: Surah[] = [];
  paraLists: Para[] = [];
  loading: boolean = true;

  constructor(private router: Router, private qurandetailsService: QurandetailsService) { }

 ngOnInit(): void {
  this.loading = true;

  forkJoin({
    surahs: this.qurandetailsService.getSurahLists(),
    paras: this.qurandetailsService.getParaLists()
  }).subscribe({
    next: ({ surahs, paras }) => {
      this.surahLists = surahs;
      this.paraLists = paras;
    },
    error: (err) => {
      console.error('Error loading data:', err);
    },
    complete: () => {
      this.loading = false; // Data fully loaded
    }
  });
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
