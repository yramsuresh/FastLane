import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ComponentListComponent } from './component-list/component-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ComponentServicesService } from './component-services.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

const appRoutes: Routes = [
  {
    path: 'components',
    loadChildren:
      '/Components/components/component-module/component-module.module#ComponentModuleModule',
  },
  {
    path: 'solutions',
    loadChildren:
      './Components/solutions/solution-module/solution-module.module#SolutionModuleModule',
  },
  {
    path: 'best-module',
    loadChildren:
      './Components/best-practice/best-module/best-module.module#BestModuleModule',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavComponent,
    ComponentListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDividerModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [ComponentServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
