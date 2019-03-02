import { Component } from '@angular/core';
import { AppleNewsResponse } from '../models/apple-news-response';
import { AppleNewsService } from '../service/apple-news.service';

@Component({
  selector: 'app-apple',
  templateUrl: 'apple.page.html',
  styleUrls: ['apple.page.scss']
})
export class ApplePage {

  public response:AppleNewsResponse;

  constructor(private appleNewsService: AppleNewsService){
    this.response = new AppleNewsResponse();
  }
  
  ngOnInit(){
    this.dataPopulation();
  }
  
  dataPopulation(){
    this.appleNewsService.getData().then((data:AppleNewsResponse) => {
      this.response = data;
    });
  }

}
