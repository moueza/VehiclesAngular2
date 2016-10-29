import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../model/vehicle';


@Component({   moduleId: module.id,
      selector: 'app-vehicles-list',
      templateUrl: 'vehicles-list.component.html',
      styleUrls: ['vehicles-list.component.css'] })










export class VehiclesListComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }

  vehicles: Vehicle[];
}
