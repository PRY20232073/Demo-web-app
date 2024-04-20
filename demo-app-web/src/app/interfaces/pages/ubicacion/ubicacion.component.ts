import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { PlacesService } from '../../services/places.service';
import { Feature, PlacesResponse } from '../../utils/places';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import mapboxgl, { AnySourceData, LngLatBounds, Marker } from 'mapbox-gl';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DirectionsResponse, Route } from '../../utils/directions';
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
  style = 'mapbox://styles/mapbox/streets-v11';

  map?: mapboxgl.Map;

  lat: number = -12.076677534584466;
  lng: number = -77.09334755839966;
  useLocation?: [number, number];
  places: Feature[] = [];
  query = 'Hospital';
  private markers: Marker[] = [];
  constructor(
    private placesService: PlacesService,
    private httpClient: HttpClient
  ) {}
  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }
  OnInit() {
    this.places = this.placesService.places;
  }
  ngAfterViewInit() {
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
          zoom: 13,
          center: this.useLocation,
        });

        const popup = new mapboxgl.Popup().setHTML('<h6>Aqui Estoy</h6>');
        new mapboxgl.Marker({ color: 'red' })
          .setLngLat(this.useLocation)
          .setPopup(popup)
          .addTo(this.map);

        this.httpClient
          .get<PlacesResponse>(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.query}.json?proximity=${this.useLocation[0]}%2C${this.useLocation[1]}&language=es&access_token=${this.accessToken}`
          )
          .subscribe((resp) => {
            this.places = resp.features;
            this.markers.forEach((marker) => marker.remove());
            const newMarkers = [];
            for (const place of this.places) {
              const [lng, lat] = place.center;
              const popup = new mapboxgl.Popup().setHTML(
                `<h6>${place.text_es}</h6><spam>${place.place_name_es}</spam>`
              );
              if (this.map) {
                const marker = new mapboxgl.Marker()
                  .setLngLat([lng, lat])
                  .setPopup(popup)
                  .addTo(this.map);
                newMarkers.push({ marker });
              } else {
                console.error('El mapa no está definido.');
              }
            }

            const bounds = new LngLatBounds();
            newMarkers.forEach((marker) => {
              bounds.extend(marker.marker.getLngLat());
            });
            if (this.useLocation) {
              bounds.extend(this.useLocation);
            }
            this.map?.fitBounds(bounds, {
              padding: 200,
            });
          });
      },
      (err) => {
        alert('No se pudo obtener la geolocalizacion');
        console.log(err);
      }
    );

    //this.map.addControl(new mapboxgl.NavigationControl());
  }
  public IrUbicacion() {
    this.map?.flyTo({
      zoom: 16,
      center: this.useLocation,
    });
  }
  getDireccion(place: Feature) {
    const end = place.center as [number, number];
    if (this.useLocation) {
      this.httpClient
        .get<DirectionsResponse>(
          `https://api.mapbox.com/directions/v5/mapbox/driving/${this.useLocation[0]}%2C${this.useLocation[1]}%3B${end[0]}%2C${end[1]}?alternatives=false&geometries=geojson&language=es&overview=simplified&steps=false&access_token=${this.accessToken}`
        )
        .subscribe((resp) => {
          this.drawPolyLine(resp.routes[0]);
        });
    }
  }
  drawPolyLine(route: Route) {
    const coords = route.geometry.coordinates;
    const bounds = new LngLatBounds();
    coords.forEach(([lng, lat]) => {
      bounds.extend({ lng, lat });
    });
    this.map?.fitBounds(bounds, {
      padding: 200,
    });

    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords,
            },
          },
        ],
      },
    };
    if (this.map?.getLayer('RouteString')) {
      this.map.removeLayer('RouteString');
      this.map.removeSource('RouteString');
    }
    this.map?.addSource('RouteString', sourceData);
    this.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': 'black',
        'line-width': 3,
      },
    });
  }
}
