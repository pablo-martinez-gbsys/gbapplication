import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomainResponse } from '../models/domain-response';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  private readonly API_KEY = "9e8802a9eda041a19e835090096e421b";

  constructor(public http:HttpClient) {
   }

   public getData():Promise<DomainResponse>{
    return new Promise( (accept, reject) => {
      this.http.get(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${this.API_KEY}`)
      .toPromise().then((domainResponse:DomainResponse) => {
        accept(domainResponse);
      }).catch((error) => {
        console.error(error);
        reject("We can't retrive the REST data");
      });
    });
   }
}
