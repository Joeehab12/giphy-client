import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GIFService {

  constructor(private http:HttpClient) { }

  getGIFData(){
    return this.http.get('https://api.giphy.com/v1/gifs/random?api_key=b9NHChW9WIKiKRQQR8zniLH35Csi4QHD');
  }

  getStickerData(){
    return this.http.get('https://api.giphy.com/v1/stickers/random?api_key=b9NHChW9WIKiKRQQR8zniLH35Csi4QHD');
  }
  getSearchGIF(query:string){
    return this.http.get('https://api.giphy.com/v1/gifs/translate?api_key=b9NHChW9WIKiKRQQR8zniLH35Csi4QHD' + '&s=' + query);
  }
}
