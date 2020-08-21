import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { StandardFeatureComponent } from './dialog/standard-feature/standard-feature.component';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { ModalService } from '../core/modal.service';

@NgModule({
  declarations: [
    HeaderComponent,
     FooterComponent,
     StandardFeatureComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  providers: [BsModalRef,ModalService],
  entryComponents: [StandardFeatureComponent]
})
export class SharedModule { }
