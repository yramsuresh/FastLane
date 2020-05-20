import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import {SideNavComponent} from './side-nav/side-nav.component';
@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [DetailsComponent]
})
export class CommonComponentModule { }
