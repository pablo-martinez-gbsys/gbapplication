import { Component } from '@angular/core';
import { topBusinessService } from '../service/top-business.service';
import { TopBusinessResponse } from '../models/topBusiness-response';

@Component({
  selector: 'app-newscr',
  templateUrl: 'newscr.page.html',
  styleUrls: ['newscr.page.scss']
})
export class NewsCRPage {

  public response:TopBusinessResponse;


  constructor(private bitcoinService:topBusinessService){
    this.response = new TopBusinessResponse();
  }
  
  ngOnInit(){
    this.dataPopulation();
  }
  
  dataPopulation(){
    this.bitcoinService.getData().then((data:TopBusinessResponse) => {
      this.response = data;
      console.log(this.response);
    });
  }

}
