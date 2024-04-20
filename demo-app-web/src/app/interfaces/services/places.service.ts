import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature, PlacesResponse } from '../utils/places';
@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public useLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];
  get isUserLocationReady(): boolean {
    return !!this.useLocation;
  }
  constructor(private httpClient: HttpClient) {
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.useLocation = [coords.longitude, coords.latitude];
          resolve(this.useLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalizacion');
          console.log(err);
          reject();
        }
      );
    });
  }
  async getPlacesByQuery(query: string = '', token: string = '') {
    this.isLoadingPlaces = false;
    this.httpClient
      .get<PlacesResponse>(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?proximity=-77.0625473000111%2C-11.868185496695773&language=es&access_token=${token}`
      )
      .subscribe((resp) => {
        this.places = resp.features;
        this.isLoadingPlaces = true;
      });
  }
}
