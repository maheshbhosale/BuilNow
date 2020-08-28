import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BehavioursubService } from '../../services/behavioursub.service';
import * as property from '../../../../app/property/Json/project.json'
@Component({
  selector: 'app-standard-feature',
  templateUrl: './standard-feature.component.html',
  styleUrls: ['./standard-feature.component.css']
})
export class StandardFeatureComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, private readonly behaviourService: BehavioursubService) { }
  property: any;

  ngOnInit() {
    //this.property = this.behaviourService.selectedPropertyToBuild;
    const properties = (property as any).default;
    this.property=properties[0];
    console.log(this.property);
  }

  hideDialog() {
    this.bsModalRef.hide();
  }
}
