import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-quran-parawise',
  standalone: true,
  imports: [RouterOutlet, NgxExtendedPdfViewerModule],

  templateUrl: './quran-parawise.component.html',
  styleUrl: './quran-parawise.component.css'
})
export class QuranParawiseComponent {

}
