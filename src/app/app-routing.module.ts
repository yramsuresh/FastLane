import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './common/details/details.component';
import { AuthGuard } from './@Core';
import { Role } from './_models';
import { LoginComponent } from './login';
const routes: Routes = [
  {
    path: 'components',
    loadChildren: () =>
      import('../app/fastlane/components/components.module').then(
        (m) => m.ComponentsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'solutions',
    loadChildren: () =>
      import('../app/fastlane/solutions/solutions.module').then(
        (m) => m.SolutionsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'bestPractices',
    loadChildren: () =>
      import('./fastlane/bestpractice/bestpractice/bestpractice.module').then(
        (m) => m.BestpracticeModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./fastlane/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'Admin',
    loadChildren: () =>
      import('./fastlane/Admin/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] },
  },
  {
    path: 'AddForm',
    loadChildren: () =>
      import('./fastlane/Admin/add-form/addform.module').then(
        (m) => m.AddformModule
      ),
    canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] },
  },
  // {
  //   path: 'login',
  //   loadChildren: () =>
  //     import('./login/login.module').then((m) => m.LoginModule),
  // },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   redirectTo: 'Admin',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  //   data: { roles: [Role.Admin] },
  // },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
