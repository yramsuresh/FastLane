import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BestpracticeComponent } from './bestpractice/bestpractice.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

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
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FlexLayoutModule,
    MatDividerModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatTooltipModule,
  ],
  exports: [BestpracticeComponent],
})
export class BestpracticeModule {}
