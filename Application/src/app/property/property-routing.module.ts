import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyComponent } from './property.component';
import { AddNewPropertyComponent } from './add-new-property/add-new-property.component';
import { ChoosePropertyComponent } from './choose-property/choose-property.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { SelectedPropertyComponent } from './selected-property/selected-property.component';
import { BuildPropertyComponent } from './build-property/build-property.component';

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent
  },
  {
    path: 'add-new-property',
    component: AddNewPropertyComponent
  },
  {
    path: 'selected-property',
    component: SelectedPropertyComponent
  },
  {
    path: 'property-list',
    component: PropertyListComponent
  },
  {
    path: 'choose-property',
    component: ChoosePropertyComponent
  },
  {
    path: 'build-property',
    component: BuildPropertyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
