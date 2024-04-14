import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlacesService } from '../../../../services/places.service';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;
  style = 'mapbox://styles/mapbox/streets-v11';
  accessToken =
    'pk.eyJ1IjoiYmxvb29vcCIsImEiOiJjbHA5NWNwdXIwMjZoMmxxeTYyMXloeGV4In0.Yue_Nt5h5d8QVM5gZ36eHg';
  map: mapboxgl.Map | undefined;
  useLocation?: [number, number];
  lat: number = -12.076677534584466;
  lng: number = -77.09334755839966;
  constructor(private placesService: PlacesService) {}
  ngAfterViewInit(): void {
    if (!navigator.geolocation) {
      alert('Navegador no soporta Geolocalización');
      throw new Error('Navegador no soporta Geolocalización');
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.useLocation = [coords.longitude, coords.latitude];
        (mapboxgl as typeof mapboxgl).accessToken = this.accessToken;
        this.map = new mapboxgl.Map({
          accessToken: this.accessToken,
          container: 'map',
          style: this.style,
          zoom: 16,
          center: [this.lat, this.lng],
        });
        const geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          //language: 'de-DE', // Specify the language as German.
          mapboxgl: mapboxgl,
        });
        const popup = new mapboxgl.Popup().setHTML('<h6>Aqui Estoy</h6>');
        this.map.addControl(geocoder);
        new mapboxgl.Marker({ color: 'red' })
          .setLngLat(this.useLocation)
          .setPopup(popup)
          .addTo(this.map);
      },
      (err) => {
        alert('No se pudo obtener la geolocalizacion');
        console.log(err);
      }
    );
  }
}
