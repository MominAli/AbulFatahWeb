import { Component } from '@angular/core';
import { MediadetailsService, Media, FilterOptions } from '../_services/mediadetails.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-media',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './media.component.html',
  styleUrl: './media.component.css'
})
export class MediaComponent {

  mediaList: Media[] = [];
  searchQuery = '';
  filterOptions: FilterOptions = {
    topics: [],
    vocalLists: [],
    months: [],
    duration: ''
  };

  constructor(private mediaService: MediadetailsService) { }

  ngOnInit(): void {
    this.mediaList = this.mediaService.getMediaList();
  }

  searchMedia() {
    this.mediaList = this.mediaService.searchMedia(this.searchQuery, this.filterOptions);
  }
  updateFilter(event: Event, type: keyof FilterOptions, value: string) {
    console.log('start');
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      this.filterOptions[type] = [...this.filterOptions[type] as string[], value];
    }
    else {
      this.filterOptions[type] = (this.filterOptions[type] as string[]).filter(item => item !== value);
    }
    this.searchMedia();
  }
  updateDuration(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.filterOptions.duration = target.value;
    this.searchMedia();
  }
}

