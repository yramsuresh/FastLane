import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestPracticeComponent } from '../best-practice.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BestPracticeComponent }];

@NgModule({
  declarations: [BestPracticeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BestModuleModule {}
