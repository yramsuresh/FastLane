import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsComponent } from '../solutions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'components', component: SolutionsComponent }];

@NgModule({
  declarations: [SolutionsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SolutionModuleModule {}
