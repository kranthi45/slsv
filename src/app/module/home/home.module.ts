import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    HomeHeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,MaterialModule
  ]
})
export class HomeModule { }
