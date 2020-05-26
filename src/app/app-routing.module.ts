import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './common/details/details.component';

const routes: Routes = [
  {
    path: 'components',
    loadChildren: () =>
      import('./components/components.module').then((m) => m.ComponentsModule),
  },
  {
    path: 'solutions',
    loadChildren: () =>
      import('./solutions/solutions.module').then((m) => m.SolutionsModule),
  },
  {
    path: 'bestPractices',
    loadChildren: () =>
      import('./bestpractice/bestpractice.module').then(
        (m) => m.BestpracticeModule
      ),
  },
  {
    path: 'details',
    component: DetailsComponent,
  },
  {
    path: '**',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
