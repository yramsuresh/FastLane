import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsComponent } from './solutions/solutions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SolutionsComponent,
  },
];

@NgModule({
  declarations: [SolutionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [SolutionsComponent],
})
export class SolutionsModule {}
