import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeHeaderComponent } from './home-header/home-header.component';

const routes: Routes = [
 // {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'',component:HomeHeaderComponent,children:[
  {path:'production',loadChildren:()=>import('src/app/module/production/production.module').then(module=>module.ProductionModule)},
  {path:'stocks',loadChildren:()=>import('src/app/module/stocks/stocks.module').then(module=>module.StocksModule)},
  {path:'payments',loadChildren:()=>import('src/app/module/payments/payments.module').then(module=>module.PaymentsModule)},
  {path:'employee',loadChildren:()=>import('src/app/module/employee/employee.module').then(module=>module.EmployeeModule)},
  {path:'delivery',loadChildren:()=>import('src/app/module/delivery/delivery.module').then(module=>module.DeliveryModule)},
  {path:'home',component:DashboardComponent}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
