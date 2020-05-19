import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from '../components.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'components', component: ComponentsComponent }];

@NgModule({
  declarations: [ComponentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ComponentModuleModule {}
