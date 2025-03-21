import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Surah, Para, QurandetailsService } from '../_services/qurandetails.service';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
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

  constructor(private router: Router , private qurandetailsService:QurandetailsService){ }

  ngOnInit(): void {
     this.qurandetailsService.getSurahLists().subscribe((data) => { this.surahLists = data; }); 
     this.qurandetailsService.getParaLists().subscribe((data) => { this.paraLists = data; }); 

    }

  quranDetails()
  {
     this.router.navigate(['/quran-details']);
  }
}
