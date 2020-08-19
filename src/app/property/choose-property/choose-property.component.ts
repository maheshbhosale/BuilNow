import { Component, OnInit } from '@angular/core';
import * as property from '../Json/project.json';

@Component({
  selector: 'app-choose-property',
  templateUrl: './choose-property.component.html',
  styleUrls: ['./choose-property.component.css']
})
export class ChoosePropertyComponent implements OnInit {
  property: any;
  selectedIndustry = "Residential";

  constructor() { }

  ngOnInit() {
    const properties = (property as any).default;
    console.log(properties);
    this.property = properties.filter(x => x.ProductLine === this.selectedIndustry);
    console.log(this.property);
  }

}
