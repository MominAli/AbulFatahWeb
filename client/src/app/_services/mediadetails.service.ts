import { Injectable } from '@angular/core';


// export interface Topic {
//   topicId: number;
//   topic: string;

// }

// export interface Vocallist {
//   vocalId: number;
//   vocalName: string;

// }
// export interface Months {
//   monthId: number;
//   monthName: string;

// }
// export interface Topic {
//   topicId: number;
//   topic: string;

// }

 export interface Media {
  title: string;
  duration: string;
  contentURL: string;
  imageURL: string;
  topics:string[],
  vocallist:string[],
  months:string[],

}


 export interface FilterOptions {
  topics: string[];
  vocalLists: string[];
  months: string[];
  duration: string;
  [key: string]: string[] | string; // Add index signature
}

@Injectable({
  providedIn: 'root'
})
export class MediadetailsService {

  constructor() { }

  private mediaList: Media[] = [
    { title: 'Hashmati Network 1',duration: '00:02:29',contentURL:'https://www.youtube.com/watch?v=orD6if_pXUA',imageURL:'https://data2.dawateislami.net/download/media-images/154795.jpg',topics:['Naat'],vocallist:['Huzur Nasir Raza'],months:['Muharram-ul-Haram']},
    // Add more media items as needed 
  ];
  getMediaList(): Media[] {

    return this.mediaList;
  }

  searchMedia(query: string, filterOptions: FilterOptions): Media[] {
    console.log(filterOptions);
    return this.mediaList.filter(media => {
      const matchesQuery = media.title.toLowerCase().includes(query.toLowerCase());
      const matchesTopics = filterOptions.topics.length === 0 || filterOptions.topics.includes(media.topics[0]);
      const matchesVocalLists = filterOptions.vocalLists.length === 0 || filterOptions.vocalLists.includes(media.vocallist[0]);
      const matchesMonths = filterOptions.months.length === 0 || filterOptions.months.includes(media.months[0]);
      const matchesDuration = !filterOptions.duration || media.duration.includes(filterOptions.duration);

      return matchesQuery && matchesTopics && matchesVocalLists && matchesMonths && matchesDuration;
    });
  }
}
