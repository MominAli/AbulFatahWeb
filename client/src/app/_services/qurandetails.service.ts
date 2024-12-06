import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Surah {
   surahNumber: number; 
   suranameEng: string; 
   suranameArabic: string;
   imgSrc: string; 
   imgAlt: string;}

   export interface Para {
    paraNumber: number; 
    paraName: string; 
   }
   export interface ddlPara {
    value: number; 
    name: string; 
   }

   export interface ddlSurah {
    value: number; 
    name: string; 
   }
   export interface ddlQari {
    value: number; 
    name: string; 
   }
   
@Injectable({
  providedIn: 'root'
})
export class QurandetailsService {

  private surah_lists: Surah[] = [ 
    { surahNumber: 1, suranameEng: 'Al Fatiha', suranameArabic: 'اَلْفَاتِحَة', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Fatiha' },
    { surahNumber: 2, suranameEng: 'Al Baqarah', suranameArabic: 'اَلْبَقَرَة', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Baqarah' },
    { surahNumber: 3, suranameEng: 'Al Imran', suranameArabic: 'اٰلِ عِمْرَان', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Imran' },
    { surahNumber: 4, suranameEng: 'An Nisa', suranameArabic: 'اَلنِّسَآء', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'An Nisa' },
    { surahNumber: 5, suranameEng: 'Al Maidah', suranameArabic: 'اَلْمَـآئِدَة', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Maidah' },
    { surahNumber: 6, suranameEng: 'Al Anam', suranameArabic: 'اَلْاَ نْعَام', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Anam' },
    { surahNumber: 7, suranameEng: 'Al Anam', suranameArabic: 'اَلْاَ نْعَام', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Anam' },
    { surahNumber: 8, suranameEng: 'Al Anam', suranameArabic: 'اَلْاَ نْعَام', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Anam' },
    { surahNumber: 9, suranameEng: 'Al Anam', suranameArabic: 'اَلْاَ نْعَام', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Anam' },
    { surahNumber: 10, suranameEng: 'Al Anam', suranameArabic: 'اَلْاَ نْعَام', imgSrc: 'assets/img/quran/makkah-img.ico', imgAlt: 'Al Anam' },

    ];

    private para_lists :Para[]= [
      { paraNumber: 1, paraName: 'الٓمّٓ' },
      { paraNumber: 2, paraName: 'سَیَقُوْلُ' },
      { paraNumber: 3, paraName: 'تِلْكَ الرُّسُلُ' },
      { paraNumber: 4, paraName: 'لَنْ تَنَالُوا' },
      { paraNumber: 5, paraName: 'وَالْمُحْصَنَاتُ' },
      { paraNumber: 6, paraName: 'يَا أَيُّهَا الَّذِينَ' },
      { paraNumber: 7, paraName: 'وَإِذَا سَمِعُوا' },
      { paraNumber: 8, paraName: 'قَالَ الْمَلَأُ' },
      { paraNumber: 9, paraName: 'قَدْ أَفْلَحَ' },
      { paraNumber: 10, paraName: 'وَاعْلَمُوا' },
      { paraNumber: 11, paraName: 'يَعْتَذِرُونَ' },
      { paraNumber: 12, paraName: 'وَمَا مِنْ دَآبَّةٍ' },
      { paraNumber: 13, paraName: 'وَمَاۤ اُبَرِّئُ' },
      { paraNumber: 14, paraName: 'رُبَمَا' },
      { paraNumber: 15, paraName: 'سُبْحَانَ الَّذِي' },
      { paraNumber: 16, paraName: 'قَالَ أَلَمْ' },
      { paraNumber: 17, paraName: 'اقْتَرَبَ لِلْنَّاسِ' },
      { paraNumber: 18, paraName: 'قَدْ أَفْلَحَ' },
      { paraNumber: 19, paraName: 'وَقَالَ الَّذِينَ' },
      { paraNumber: 20, paraName: 'أَمَّنْ خَلَقَ' },
      { paraNumber: 21, paraName: 'اتْلُ مَا أُوحِيَ' },
      { paraNumber: 22, paraName: 'وَمَنْ يَقْنُتْ' },
      { paraNumber: 23, paraName: 'وَمَا أُنْزِلَ إِلَيْكُم' },
      { paraNumber: 24, paraName: 'فَمَنْ أَظْلَمُ' },
      { paraNumber: 25, paraName: 'إِلَيْهِ يُرَدُّ' },
      { paraNumber: 26, paraName: 'حٰمٓ' },
      { paraNumber: 27, paraName: 'قَالَ فَمَا خَطْبُكُم' },
      { paraNumber: 28, paraName: 'قَدْ أَفْلَحَ' },
      { paraNumber: 29, paraName: 'بَارَكَ الَّذِي' },
      { paraNumber: 30, paraName: 'عَمَّ یَتَسَاءَلُوْنَ' }
  ];

  private ddlPara_lists : ddlPara[]= [
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

  private ddlSurah_lists : ddlSurah[]= [
    {  value: 1, name: "1 - Surah Al-Fatihah - الفاتحة" },
    {  value: 2, name: "2 - Surah Al-Baqarah - البقرة" },
    {  value: 3, name: "3 - Surah Aal-e-Imran - آل عمران" },
    {  value: 4, name: "4 - Surah An-Nisaa - النساء" },
    {  value: 5, name: "5 - Surah Al-Maidah - المائدة" },
    {  value: 6, name: "6 - Surah Al-Anaam - الأنعام" },
    {  value: 7, name: "7 - Surah Al-Airaaf - الأعراف" },
    {  value: 8, name: "8 - Surah Al-Anfaal - الأنفال" },
    {  value: 9, name: "9 - Surah At-Taubah - التوبة" },
    {  value: 10, name: "10 - Surah Younus - يونس" },
    {  value: 11, name: "11 - Surah Hood - هود" },
    {  value: 12, name: "12 - Surah Yousuf - يوسف" },
    {  value: 13, name: "13 - Surah Ar-Raad - الرعد" },
    {  value: 14, name: "14 - Surah Ibraheem - إبراهيم" },
    {  value: 15, name: "15 - Surah Al-Hijr - الحجر" },
    {  value: 16, name: "16 - Surah An-Nahl - النحل" },
    {  value: 17, name: "17 - Surah Bani Israeil - الإسراء" },
    {  value: 18, name: "18 - Surah Al-Kahf - الكهف" },
    {  value:19, name: "19 - Surah Maryam - مريم" },
    {  value: 20, name: "20 - Surah Taa Haa - طه" },
    {  value: 21, name: "21 - Surah Al-Anbiyaa - الأنبياء" },
    {  value: 22, name: "22 - Surah Al-Hajj - الحج" },
    {  value: 23, name: "23 - Surah Al-Mominoon - المؤمنون" },
    {  value: 24, name: "24 - Surah An-Noor - النور" },
    {  value: 25, name: "25 - Surah Al-Furqaan - الفرقان" },
    {  value: 26, name: "26 - Surah Ash-Shoaraa - الشعراء" },
    {  value: 27, name: "27 - Surah An-Naml - النمل" },
    {  value: 28, name: "28 - Surah Al-Qasas - القصص" },
    {  value: 29, name: "29 - Surah Al-Ankaboot - العنكبوت" },
    {  value: 30, name: "30 - Surah Ar-Room - الروم" },
    {  value: 31, name: "31 - Surah Luqmaan - لقمان" },
    {  value: 32, name: "32 - Surah As-Sajdah - السجدة" },
    {  value: 33, name: "33 - Surah Al-Ahzaab - الأحزاب" },
    {  value: 34, name: "34 - Surah Saba - سبأ" },
    {  value: 35, name: "35 - Surah Fatir - فاطر" },
    {  value: 36, name: "36 - Surah Yaaseen - يس" },
    {  value: 37, name: "37 - Surah As-Saffat - الصافات" },
    {  value: 38, name: "38 - Surah Saad - ص" },
    {  value: 39, name: "39 - Surah Az-Zumar - الزمر" },
    {  value: 40, name: "40 - Surah Al-Momin - غافر" },
    {  value: 41, name: "41 - Surah Haa Meem Sajdah - فصلت" },
    {  value: 42, name: "42 - Surah Ash-Shoora - الشورى" },
    {  value: 43, name: "43 - Surah Az-Zukhruf - الزخرف" },
    {  value: 44, name: "44 - Surah Ad-Dukhan - الدخان" },
    {  value: 45, name: "45 - Surah Al-Jasia - الجاثية" },
    {  value: 46, name: "46 - Surah Al-Ahqaaf - الأحقاف" },
    {  value: 47, name: "47 - Surah Muhammad - محمد" },
    {  value: 48, name: "48 - Surah Al-Fath - الفتح" },
    {  value: 49, name: "49 - Surah Al-Hujuraat - الحجرات" },
    {  value: 50, name: "50 - Surah Qaaf - ق" },
    { value: 51, name: "51 - Surah Az-Zaariaat - الذاريات" },
    { value: 52, name: "52 - Surah At-Toor - الطور" },
    { value: 53, name: "53 - Surah An-Najm - النجم" },
    { value: 54, name: "54 - Surah Al-Qamar - القمر" },
    { value: 55, name: "55 - Surah Ar-Rahman - الرحمن" },
    { value: 56, name: "56 - Surah Al-Waqiah - الواقعة" },
    { value: 57, name: "57 - Surah Al-Hadeed - الحديد" },
    { value: 58, name: "58 - Surah Al-Mujadilah - المجادلة" },
    { value: 59, name: "59 - Surah Al-Hashr - الحشر" },
    { value: 60, name: "60 - Surah Al-Mumtahinah - الممتحنة" },
    { value: 61, name: "61 - Surah As-Saff - الصف" },
    { value: 62, name: "62 - Surah Al-Jumah - الجمعة" },
    { value: 63, name: "63 - Surah Al-Munafiqoon - المنافقون" },
    { value: 64, name: "64 - Surah At-Taghabun - التغابن" },
    { value: 65, name: "65 - Surah At-Talaaq - الطلاق" },
    { value: 66, name: "66 - Surah At-Tahreem - التحريم" },
    { value: 67, name: "67 - Surah Al-Mulk - الملك" },
    { value: 68, name: "68 - Surah Al-Qalam - القلم" },
    { value: 69, name: "69 - Surah Al-Haaqqah - الحاقة" },
    { value: 70, name: "70 - Surah Al-Maarij - المعارج" },
    { value: 71, name: "71 - Surah Nooh - نوح" },
    { value: 72, name: "72 - Surah Al-Jinn - الجن" },
    { value: 73, name: "73 - Surah Al-Muzzamil - المزمل" },
    { value: 74, name: "74 - Surah Al-Muddasir - المدثر" },
    { value: 75, name: "75 - Surah Al-Qayamah - القيامة" },
    { value: 76, name: "76 - Surah Ad-Daher - الإنسان" },
    { value: 77, name: "77 - Surah Al-Mursalat - المرسلات" },
    { value: 78, name: "78 - Surah An-Naba - النبأ" },
    { value: 79, name: "79 - Surah An-Naziaat - النازعات" },
    { value: 80, name: "80 - Surah Abasa - عبس" },
    { value: 81, name: "81 - Surah At-Takveer - التكوير" },
    { value: 82, name: "82 - Surah Al-Infitaar - الإنفطار" },
    { value: 83, name: "83 - Surah Al-Mutaffifeen - المطففين" },
    { value: 84, name: "84 - Surah Al-Inshiqaq - الإنشقاق" },
    { value: 85, name: "85 - Surah Al-Burooj - البروج" },
    { value: 86, name: "86 - Surah At-Tariq - الطارق" },
    { value: 87, name: "87 - Surah Al-Aala - الأعلى" },
    { value: 88, name: "88 - Surah Al-Ghashia - الغاشية" },
    { value: 89, name: "89 - Surah Al-Fajr - الفجر" },
    { value: 90, name: "90 - Surah Al-Balad - البلد" },
    { value: 91, name: "91 - Surah Ash-Shams - الشمس" },
    { value: 92, name: "92 - Surah Al-Lail - الليل" },
    { value: 93, name: "93 - Surah Az-Zuha - الضحى" },
    { value: 94, name: "94 - Surah Alam Nashrah - الشرح" },
    { value: 95, name: "95 - Surah At-Teen - التين" },
    { value: 96, name: "96 - Surah Al-Alaq - العلق" },
    { value: 97, name: "97 - Surah Al-Qadr - القدر" },
    { value: 98, name: "98 - Surah Al-Bayyinah - البينة" },
    { value: 99, name: "99 - Surah Al-Zilzal - الزلزلة" },
    { value: 100,name: "100 - Surah Al-Adiyaat - العاديات" },
    { value: 101, name: "101 - Surah Al-Qariah - القارعة" },
    { value: 102, name: "102 - Surah At-Takasur - التكاثر" },
    { value: 103, name: "103 - Surah Al-Asr - العصر" },
    { value: 104, name: "104 - Surah Al-Humazah - الهمزة" },
    { value: 105, name: "105 - Surah Al-Feel - الفيل" },
    { value: 106, name: "106 - Surah Quraish - قريش" },
    { value: 107, name: "107 - Surah Al-Maoon - الماعون" },
    { value: 108, name: "108 - Surah Al-Kausar - الكوثر" },
    { value: 109, name: "109 - Surah Al-Kafiroon - الكافرون" },
    { value: 110, name: "110 - Surah An-Nasr - النصر" },
    { value: 111, name: "111 - Surah Al-Lahab - المسد" },
    { value: 112, name: "112 - Surah Al-Ikhlaas - الإخلاص" },
    { value: 113, name: "113 - Surah Al-Falaq - الفلق" },
    { value: 114, name: "114 - Surah An-Naas - الناس" }
]
private ddlQari_lists :ddlQari[]=[
  {  value: 1, name: "1 - Qari 01" },
  {  value: 2, name: "2 - Qari 02" },
]
  constructor() { }

  getSurahLists(): Observable<Surah[]> { return of(this.surah_lists);}
  getParaLists(): Observable<Para[]> { return of(this.para_lists);}

  getddlParaLists(): Observable<ddlPara[]> { return of(this.ddlPara_lists);}
  getddlSurahLists(): Observable<ddlSurah[]> { return of(this.ddlSurah_lists);}
  getddlQariLists(): Observable<ddlQari[]> { return of(this.ddlQari_lists);}


}
