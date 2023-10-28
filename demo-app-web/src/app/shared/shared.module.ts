import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, NavBarComponent, RouterModule],
  exports: [NavBarComponent],
})
export class SharedModule {}
