import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import{MatIconModule} from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu';
import{MatButtonModule} from '@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input'
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
  MatMenuModule,MatSidenavModule,
  MatToolbarModule,MatInputModule,
  MatIconModule,MatButtonModule,
  MatCardModule,MatFormFieldModule
  ],
  exports:[ FlexLayoutModule,
    MatButtonModule,
  MatMenuModule,
  MatToolbarModule,MatSidenavModule,
  MatIconModule,MatInputModule,MatButtonModule,MatListModule,
  MatCardModule,MatFormFieldModule]
})
export class MaterialModule { }
