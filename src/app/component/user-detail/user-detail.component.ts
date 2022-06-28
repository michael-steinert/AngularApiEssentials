import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
//import { Response } from 'src/app/interface/response.interface';
import { User } from 'src/app/interface/user.interface';
import { Coordinate } from 'src/app/interface/coordinate.interface';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  //response: Response = {} as Response;
  user: User = {} as User;
  Mode = Mode;
  mode: Mode = Mode.LOCKED;
  buttonText: ButtonMode = ButtonMode.SAVE;
  marker = new Leaflet.Icon({
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconSize: [32, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

  constructor(
    private activatedRoute: ActivatedRoute //private userService: UserService
  ) {}

  /* Lifecycle Hook is called when Component has been initialized  */
  ngOnInit(): void {
    /* Using Resolver to ensure that the Data is fetched before the Route is resolved */
    this.user = <User>(
      this.activatedRoute.snapshot.data['resolvedUser'].results[0]
    );
    console.log(this.user);
    this.loadMap(this.user.coordinate);
    /*     
  	this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.userService
        // `!` ignores the Null Check
        .getUser(paramMap.get('uuid')!)
        .subscribe((response: any) => {
          console.log(response);
          this.response = response;
        });
    });
    */
  }

  changeMode(mode?: Mode): void {
    this.mode = this.mode === Mode.LOCKED ? Mode.EDIT : Mode.LOCKED;
    this.buttonText =
      this.buttonText === ButtonMode.EDIT ? ButtonMode.SAVE : ButtonMode.EDIT;
    if (mode === Mode.EDIT) {
      console.log('Updating User');
    }
  }

  private loadMap(coordinate: Coordinate): void {
    const map = Leaflet.map('map', {
      center: [coordinate.latitude, coordinate.longitude],
      zoom: 8,
    });
    const tileLayer = Leaflet.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 1,
        maxZoom: 30,
        crossOrigin: true,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors',
      }
    );
    tileLayer.addTo(map);
    const marker = Leaflet.marker([coordinate.latitude, coordinate.longitude], {
      icon: this.marker,
    });
    marker
      .addTo(map)
      .bindPopup(`${this.user.firstName}'s Location`)
      .openPopup();
  }
}

export enum Mode {
  EDIT = 'edit',
  LOCKED = 'locked',
}

enum ButtonMode {
  EDIT = 'Edit',
  SAVE = 'Save',
}
