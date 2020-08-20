import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-standard-feature',
  templateUrl: './standard-feature.component.html',
  styleUrls: ['./standard-feature.component.css']
})
export class StandardFeatureComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  hideDialog() {
    this.bsModalRef.hide();
  }
}
