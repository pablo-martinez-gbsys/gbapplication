import { Component } from '@angular/core';

@Component({
  selector: 'app-newscr',
  templateUrl: 'newscr.page.html',
  styleUrls: ['newscr.page.scss']
})
export class NewsCRPage {

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
