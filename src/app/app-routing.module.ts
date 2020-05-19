import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'components',
    loadChildren: './Components/components/components.module#ComponentsModule',
  },
  {
    path: 'solutions',
    loadChildren: './Components/solutions/solutions.module#SolutionsModule',
  },
  {
    path: 'bestpractice',
    loadChildren:
      './Components/bestpractice/bestpractice.module#BestpracticeModule',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
