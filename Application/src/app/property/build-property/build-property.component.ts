import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/modal.service';
import { StandardFeatureComponent } from 'src/app/shared/dialog/standard-feature/standard-feature.component';
import * as $ from 'jquery';
@Component({
  selector: 'app-build-property',
  templateUrl: './build-property.component.html',
  styleUrls: ['./build-property.component.css']
})
export class BuildPropertyComponent implements OnInit {

  constructor(private readonly modalService: ModalService) { }

  confirmationModalConfig = {
    class: 'confirm-modal'
  };
  ngOnInit() {

    $(document).ready(function () {
      $('.ext').click(function () {
        $('.act').removeClass('active');
        $(this).addClass('active');
      });
      $('.int').click(function () {
        $('.apply').removeClass('active');
        $(this).addClass('active');
      });
      $('.listitem1 , .listitem2').click(function () {
        $('#content div').hide();
        var target = '#' + $(this).data('target');
        $(target).show();
      });
      $(".front").click(function () {
        $('.image').attr("src", "../../assets/front.png");
      });
      $(".angle").click(function () {
        $('.image').attr("src", "../../assets/isoright.png");
      });
      $(".side").click(function () {
        $('.image').attr("src", "../../assets/isoleft.png");
      });
      $(".back").click(function () {
        $('.image').attr("src", "../../assets/isoback.png");
      });
    });


  }

  openStandardModal() {
    this.modalService.openModal(StandardFeatureComponent, this.confirmationModalConfig);
  }

}
