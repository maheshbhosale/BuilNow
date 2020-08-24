import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PropertyRoutingModule} from './property-routing.module';
import { RouterModule } from '@angular/router';
import { PropertyComponent } from './property.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectedPropertyComponent } from './selected-property/selected-property.component';
import {ChoosePropertyComponent} from './choose-property/choose-property.component';
import {PropertyListComponent} from './property-list/property-list.component';

@NgModule({
  declarations: [
    PropertyComponent,
    AddNewPropertyComponent,
    SelectedPropertyComponent,
    ChoosePropertyComponent,
    PropertyListComponent
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    
  ]
})
export class PropertyModule { }
