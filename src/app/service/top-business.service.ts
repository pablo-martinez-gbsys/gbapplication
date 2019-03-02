import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopBusinessResponse } from '../models/topBusiness-response';

@Injectable({
  providedIn: 'root'
})
export class topBusinessService {

private readonly API_KEY = "9e8802a9eda041a19e835090096e421b";

  constructor(public http:HttpClient) {

   }

   public getData():Promise<TopBusinessResponse>{
    return new Promise( (accept, reject) => {
      this.http.get(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-02&sortBy=publishedAt&apiKey=${this.API_KEY}`)
      .toPromise().then((TopBusinessR:TopBusinessResponse) => {
        accept(TopBusinessR);
      }).catch((error) => {
        console.error(error);
        reject("We can't retrive the REST data");
      });
    });
   }

}
