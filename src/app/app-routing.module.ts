import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'auth'},
  {path:'auth',loadChildren:()=>import('./module/authentication/authentication.module').then(module=>module.AuthenticationModule)},
  {path:'home',loadChildren:()=>import('./module/home/home.module').then(module=>module.HomeModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
