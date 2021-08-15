import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { GlobalService } from 'src/app/core/globalapi/global.service';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  constructor(private apiService:GlobalService,private http:HttpClient) { }
  private sidenav:MatSidenav;
  private drawer:MatSidenav;

  public setSideNavHeader(drawer:MatSidenav){
    this.drawer=drawer;
  }
  public headerOpen(){
    return this.drawer.open();
  }
  public headerClose(){
    return this.drawer.close();
  }
  public headerToggle():void{
    this.drawer.toggle();
  }
  public setSidenav(sidenav:MatSidenav){
    this.sidenav=sidenav
  }
  public open(){
    return this.sidenav.open();
  }
  public close(){
    //if(this.sidenav)
    return this.sidenav.close();
  }
  public toggle(){
    return this.sidenav.toggle();
  }
}
