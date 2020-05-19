import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BestpracticeComponent } from './bestpractice/bestpractice.component';

const routes: Routes = [
  {
    path: '',
    component: BestpracticeComponent,
  },
];

@NgModule({
  declarations: [BestpracticeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [BestpracticeComponent],
})
export class BestpracticeModule {}
