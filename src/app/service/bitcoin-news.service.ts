import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BitcoinNewsResponse } from '../models/bitoin-news-response';

@Injectable({
  providedIn: 'root'
})
export class BitcoinNewsService {

private readonly API_KEY = "9e8802a9eda041a19e835090096e421b";

  constructor(public http:HttpClient) {

   }

   public getData():Promise<BitcoinNewsResponse>{
    return new Promise( (accept, reject) => {
      this.http.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-02&sortBy=publishedAt&apiKey=${this.API_KEY}`)
      .toPromise().then((bitcoinNewsResponse:BitcoinNewsResponse) => {
        accept(bitcoinNewsResponse);
      }).catch((error) => {
        console.error(error);
        reject("We can't retrive the REST data");
      });
    });
   }

}
