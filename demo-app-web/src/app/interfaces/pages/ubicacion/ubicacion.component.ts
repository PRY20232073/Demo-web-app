import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl';
import { PlacesService } from '../../services/places.service';
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css'],
})
export class UbicacionComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;
  accessToken =
    'pk.eyJ1IjoiYmxvb29vcCIsImEiOiJjbHA5NWNwdXIwMjZoMmxxeTYyMXloeGV4In0.Yue_Nt5h5d8QVM5gZ36eHg';

  map: mapboxgl.Map | undefined;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat: number = -12.076677534584466;
  lng: number = -77.09334755839966;
  useLocation?: [number, number];
  constructor(private placesService: PlacesService) {}
  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }
  ngAfterViewInit() {
    if (!navigator.geolocation) {
      alert('Navegador no soporta Geolocalización');
      throw new Error('Navegador no soporta Geolocalización');
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.useLocation = [coords.longitude, coords.latitude];
        console.log(this.useLocation);
        (mapboxgl as typeof mapboxgl).accessToken = this.accessToken;
        this.map = new mapboxgl.Map({
          accessToken: this.accessToken,
          container: 'map',
          style: this.style,
          zoom: 16,
          center: this.useLocation,
        });
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          //language: 'de-DE', // Specify the language as German.
          mapboxgl: mapboxgl,
        });
        this.map.addControl(geocoder);
        new mapboxgl.Marker({ color: 'red' })
          .setLngLat(this.useLocation)
          .addTo(this.map);
      },
      (err) => {
        alert('No se pudo obtener la geolocalizacion');
        console.log(err);
      }
    );

    //this.map.addControl(new mapboxgl.NavigationControl());
  }
}
