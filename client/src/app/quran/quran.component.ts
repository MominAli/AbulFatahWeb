import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [],
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.css'
})
export class QuranComponent {
  constructor(private router: Router){ }

  quranDetails()
  {
     this.router.navigate(['/quranparawise']);
  }
}
