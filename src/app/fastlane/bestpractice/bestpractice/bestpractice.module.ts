import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BestpracticeComponent } from './bestpractice.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: BestpracticeComponent,
  },
];

@NgModule({
  declarations: [BestpracticeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule,
  ],
  exports: [BestpracticeComponent],
})
export class BestpracticeModule {}
