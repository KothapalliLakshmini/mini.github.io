import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private photosPath = 'assets/photos';
  private photoNames: string[] = [
    '1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg','7.jpeg','8.jpeg','9.jpeg','10.jpeg','11.jpeg','12.jpeg','13.jpeg','14.jpeg','15.jpeg','16.jpeg','17.jpeg','18.jpeg','19.jpeg','20.jpeg','21.jpeg','22.jpeg','23.jpeg','24.jpeg','25.jpeg','26.jpeg','27.jpeg','28.jpeg','29.jpeg','30.jpeg'

    // Add all your photo names here
  ];

  constructor() {}

  getPhotos(): string[] {
    return this.photoNames.map(photo => `${this.photosPath}/${photo}`);
  }
}