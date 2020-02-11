import { Component, OnInit } from '@angular/core';
import { GIFService } from '../gif.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  GIF_URL:string;
  sticker_URL:string;
  query:string;
  queriedGIF_URL:string;
  constructor(private gifService:GIFService) { }

  ngOnInit(): void {
  }
  generateRandomGIF(){
    this.GIF_URL = "";
    this.gifService.getGIFData().subscribe((response:any)=>{
      this.GIF_URL = response.data.images.original.url;
      console.log(this.GIF_URL);
    });
  }
  generateRandomSticker(){
    this.sticker_URL = "";
    this.gifService.getStickerData().subscribe((response:any)=>{
      this.sticker_URL = response.data.images.original.url;
      // console.log(this.sticker_URL);
    });
  }
  getGIF(){
    this.queriedGIF_URL = "";
    console.log(this.query);
    
    this.gifService.getSearchGIF(this.query).subscribe((response:any)=>{
      this.queriedGIF_URL = response.data.images.original.url;
      // console.log(this.queriedGIF_URL);
    });
  }

}
