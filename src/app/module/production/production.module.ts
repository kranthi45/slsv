import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionRoutingModule } from './production-routing.module';
import { ProductionHomeComponent } from './production-home/production-home.component';


@NgModule({
  declarations: [
    ProductionHomeComponent
  ],
  imports: [
    CommonModule,
    ProductionRoutingModule
  ]
})
export class ProductionModule { }
