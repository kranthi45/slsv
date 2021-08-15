import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductionHomeComponent } from './production-home/production-home.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'main',component:ProductionHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
