import { Component, OnInit } from '@angular/core';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
})
export class UbicacionComponent {
  accessToken =
    'pk.eyJ1IjoiYmxvb29vcCIsImEiOiJjbHA5NWNwdXIwMjZoMmxxeTYyMXloeGV4In0.Yue_Nt5h5d8QVM5gZ36eHg';

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number = -12.076677534584466;
  lng: number = -77.09334755839966;

  ngOnInit() {
    this.map = new mapboxgl.Map({
      accessToken: this.accessToken,
      container: 'map',
      style: this.style,
      zoom: 16,
      center: [this.lng, this.lat],
    });
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      language: 'de-DE', // Specify the language as German.
      mapboxgl: mapboxgl,
    });
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
