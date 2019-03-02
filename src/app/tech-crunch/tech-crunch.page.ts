import { Component } from '@angular/core';
import { TechCrunchNewsService } from '../service/techCrunch-news.service';
import { BitcoinNewsResponse } from '../models/bitoin-news-response';

@Component({
  selector: 'app-techCrunch',
  templateUrl: 'tech-crunch.page.html',
  styleUrls: ['tech-crunch.page.scss']
})
export class TechCrunchPage {

  public response:BitcoinNewsResponse;

  constructor(private techCrunchNewsService:TechCrunchNewsService){
    this.response = new BitcoinNewsResponse();
  }
  
  ngOnInit(){
    this.dataPopulation();
  }
  
  dataPopulation(){
    this.techCrunchNewsService.getData().then((data:BitcoinNewsResponse) => {
      this.response = data;
    });
  }

}
