import { Component, OnInit } from "@angular/core";
import { DomainService } from "../service/domain.service";
import { DomainResponse } from "../models/domain-response";

@Component({
  selector: "app-domain",
  templateUrl: "./domain.page.html",
  styleUrls: ["./domain.page.scss"]
})
export class DomainPage implements OnInit {
  public response: DomainResponse;
  constructor(private domainService: DomainService) {
    this.response = new DomainResponse();
  }

  ngOnInit() {
    this.dataPopulation();
  }
  
  dataPopulation() {
    this.domainService.getData().then((data: DomainResponse) => {
      this.response = data;
    });
  }
}
