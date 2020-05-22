import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './common/side-nav/side-nav.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentServicesService } from './component-services.service';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { DetailsComponent } from './common/details/details.component';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { ImagedialogComponent } from './common/imagedialog/imagedialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    // DashboardComponent,
    DetailsComponent,
    ImagedialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonModule,
    CarouselModule,
    WavesModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers: [ComponentServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
