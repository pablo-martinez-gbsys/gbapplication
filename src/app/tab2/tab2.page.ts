import { Component } from '@angular/core';
import { topBusinessService } from '../service/Top-business.service';
import { TopBusinessResponse } from '../models/TopBusiness-response';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
    });
  }

}
