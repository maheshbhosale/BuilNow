import { Component, OnInit } from '@angular/core';
import * as property from '../Json/project.json';
import { BehavioursubService } from 'src/app/shared/services/behavioursub.service';

@Component({
  selector: 'app-choose-property',
  templateUrl: './choose-property.component.html',
  styleUrls: ['./choose-property.component.css']
})
export class ChoosePropertyComponent implements OnInit {
  property: any;
  selectedIndustry = "Residential";

  icon = true;
  icon2 = true;
  icon3 = true;


  constructor() { }

  ngOnInit() {
    const properties = (property as any).default;
    console.log(properties);
    this.property = properties.filter(x => x.ProductLine === this.selectedIndustry);
    console.log(this.property);
  }


  ToggelIcon(no:number){

    if(no == 1){
      this.icon = !this.icon;
      this.icon2 = true;
      this.icon3  = true;

    }else if(no == 2){
      this.icon2 = !this.icon2;
      this.icon = true;
      this.icon3  = true;

    }else{
      this.icon3 = !this.icon3;
      this.icon2 = true;
      this.icon  = true;
    }

  }
}
