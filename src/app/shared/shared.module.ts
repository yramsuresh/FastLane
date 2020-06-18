import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './tile/tile.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormComponent } from './form/form.component';
import { MatButtonModule } from '@angular/material/button';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { SearchComponentComponent } from './search-component/search-component.component';
@NgModule({
  declarations: [TileComponent, FormComponent, SearchComponentComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    MatButtonModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
  ],
  exports: [TileComponent, FormComponent, SearchComponentComponent],
})
export class SharedModule {}
