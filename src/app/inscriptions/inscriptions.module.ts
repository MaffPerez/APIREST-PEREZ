import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsEditComponent } from './components/inscriptions-edit/inscriptions-edit.component';
import { InscriptionsListComponent } from './components/inscriptions-list/inscriptions-list.component';


@NgModule({
  declarations: [
    InscriptionsEditComponent,
    InscriptionsListComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
  ]
})
export class InscriptionsModule { }
