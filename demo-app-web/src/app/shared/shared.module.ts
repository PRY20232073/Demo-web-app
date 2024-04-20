import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [LoadingComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MaterialModule,
    NavBarComponent,
  ],
  exports: [NavBarComponent, LoadingComponent],
})
export class SharedModule {}
