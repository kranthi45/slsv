import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import{MatSidenav} from '@angular/material/sidenav'
import { Router } from '@angular/router';
import { SidenavService } from 'src/app/data/services/sidenav.service';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  sidenav:boolean=true;
  @ViewChild('drawer',{static:false})sideNav:MatSidenav;
  @ViewChild('drawer',{static:false})drawer:MatSidenav;
  selected='home';
  constructor(private route:Router,private sidenavService:SidenavService,private cdr:ChangeDetectorRef) { }
  screenWidth=window.innerWidth;
  ngOnInit(): void {
  }
  ngAfterContentChecked(){
    if(this.drawer){
      this.sidenavService.setSideNavHeader(this.drawer);
this.cdr.detectChanges();
    }
  }
logout(){
  this.route.navigate(['']);
  localStorage.clear();
}
goto(module){
  this.selected=module;
  this.route.navigate(['/home/'+module])
}
sideNavToggle(){
this.sidenavService.headerToggle();
}
}
