import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    RouterOutlet,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class NavBarComponent {
  links = ['crear-cita', 'p2', 'p3'];
  activeLink = this.links[0];
  background = '';
  constructor(private location: Location) {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
  isActive(url: string): boolean {
    return this.location.path() === url;
  }
  isActiveCrearCita(url: string): boolean {
    return this.location.path() === url || this.location.path() === '';
  }
}
