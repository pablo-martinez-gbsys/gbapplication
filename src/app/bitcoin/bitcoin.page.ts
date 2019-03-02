import { Component } from '@angular/core';
import { BitcoinNewsService } from '../service/bitcoin-news.service';
import { BitcoinNewsResponse } from '../models/bitoin-news-response';

@Component({
  selector: 'app-bitcoin',
  templateUrl: 'bitcoin.page.html',
  styleUrls: ['bitcoin.page.scss']
})
export class BitcoinPage {

  public response:BitcoinNewsResponse;

  constructor(private bitcoinService:BitcoinNewsService){
    this.response = new BitcoinNewsResponse();
  }
  
  ngOnInit(){
    this.dataPopulation();
  }
  
  dataPopulation(){
    this.bitcoinService.getData().then((data:BitcoinNewsResponse) => {
      this.response = data;
    });
  }

}
