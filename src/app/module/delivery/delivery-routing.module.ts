import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryHomeComponent } from './delivery-home/delivery-home.component';

const routes: Routes = [
  {path:'',redirectTo:'dhome',pathMatch:'full'},
  {path:'dhome',component:DeliveryHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
