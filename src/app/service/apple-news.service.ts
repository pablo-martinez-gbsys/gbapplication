import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppleNewsResponse } from '../models/apple-news-response';

@Injectable({
  providedIn: 'root'
})
export class AppleNewsService {

  private readonly API_KEY = "9e8802a9eda041a19e835090096e421b";

  constructor(public http:HttpClient) {

   }

   public getData():Promise<AppleNewsResponse>{
    return new Promise( (accept, reject) => {
      this.http.get(`https://newsapi.org/v2/everything?q=apple&from=2019-03-01&to=2019-03-01&sortBy=popularity&apiKey=${this.API_KEY}`)
      .toPromise().then((AppleNewsResponse:AppleNewsResponse) => {
        accept(AppleNewsResponse);
      }).catch((error) => {
        console.error(error);
        reject("We can't retrive the REST data");
      });
    });
   }
}
