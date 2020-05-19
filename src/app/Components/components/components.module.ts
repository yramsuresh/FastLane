import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
  },
];

@NgModule({
  declarations: [ComponentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ComponentsComponent],
})
export class ComponentsModule {}
