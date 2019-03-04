import { Component, OnInit } from '@angular/core';
import { topBusinessService } from '../service/Top-business.service';
import { TopBusinessResponse } from '../models/TopBusiness-response';

@Component({
  selector: 'app-top-business-news',
  templateUrl: './top-business-news.page.html',
  styleUrls: ['./top-business-news.page.scss'],
})
export class TopBusinessNewsPage {

  public response:TopBusinessResponse;

  constructor(private TopBusinessNews:topBusinessService){
    this.response = new TopBusinessResponse();
  }

  ngOnInit(){
    this.dataPopulation();
  }

  dataPopulation(){
    this.TopBusinessNews.getData('ar').then((data:TopBusinessResponse) => {
      this.response = data;
    });
  }

}
