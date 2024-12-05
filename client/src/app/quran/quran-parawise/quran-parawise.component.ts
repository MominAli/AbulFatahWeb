import { Component } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quran-parawise',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NgxExtendedPdfViewerModule],

  templateUrl: './quran-parawise.component.html',
  styleUrl: './quran-parawise.component.css'
})
export class QuranParawiseComponent {
  paras = [
    { value: 1, name: '1 - Alif-Laam-Meem - المّ' },
    { value: 2, name: '2 - Sayaqoolu - سيقول' },
    { value: 3, name: '3 - Tilk-al-Rusulu - تلك الرسل' },
    { value: 4, name: '4 - Lan-Tanalu - لن تنالوا' },
    { value: 5, name: '5 - Wal-Muhsinaatu - والمحصنٰت' },
    { value: 6, name: '6 - La-Yuhibullah - لايحب الله' },
    { value: 7, name: '7 - Wa-Iza-Samioo - واذاسمعوا' },
    { value: 8, name: '8 - Walao-Annana - ولواننا' },
    { value: 9, name: '9 - Wa-Qaal-al-Malaoo - قال الملا' },
    { value: 10, name: '10 - Wa-A\'lamoo - واعلموا' },
    { value: 11, name: '11 - Ya\'ataziroona - يعتذرون' },
    { value: 12, name: '12 - Wama-Min-Daabbatin - ومامن دآبّة' },
    { value: 13, name: '13 - Wama-Ubrioo - ومآابرىٔ' },
    { value: 14, name: '14 - Rabbuma - ربما' },
    { value: 15, name: '15 - Subhan-al-Lazi - سبحٰن الذى' },
    { value: 16, name: '16 - Qaala-Alam - قال الم' },
    { value: 17, name: '17 - Iqtaraba - اقترب للناس' },
    { value: 18, name: '18 - Qad-Aflaha - قدافلح' },
    { value: 19, name: '19 - Wa-Qaal-al-Lazina - وقال الذين' },
    { value: 20, name: '20 - Amman-Khalaqa - امن خلق' },
    { value: 21, name: '21 - Utlu-Maa-Oohia - اتل مآاوحى' },
    { value: 22, name: '22 - Wa-Man-Yaqnut - ومن يّقنت' },
    { value: 23, name: '23 - Wa-Malia - ومالى' },
    { value: 24, name: '24 - Fa-Man-Azlamu - فمن اظلم' },
    { value: 25, name: '25 - Ilayhi-Yuraddu - اليه يردّ' },
    { value: 26, name: '26 - Haa-Meem - حٰم' },
    { value: 27, name: '27 - Qaala-Fama-Khatbukum - قال فماخطبكم' },
    { value: 28, name: '28 - Qad-Sami-Allah-Hu - قدسمع الله' },
    { value: 29, name: '29 - Tabarak-al-Lazi - تبٰرك الّذى' },
    { value: 30, name: '30 - A\'mma - عمّ' }
  ];

  
}
