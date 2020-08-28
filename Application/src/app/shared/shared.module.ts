import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { StandardFeatureComponent } from './dialog/standard-feature/standard-feature.component';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { ModalService } from '../core/modal.service';
import { ConfirmationDialogComponent } from './dialog/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StandardFeatureComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [BsModalRef, ModalService],
  entryComponents: [StandardFeatureComponent, ConfirmationDialogComponent]
})
export class SharedModule { }
