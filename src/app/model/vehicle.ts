import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../model/vehicle';

import { VehicleService } from '../model/vehicle.service';

@Component({   moduleId: module.id,
      selector: 'app-vehicles-list',
      templateUrl: 'vehicles-list.component.html',
      styleUrls: ['vehicles-list.component.css'],
      providers: [VehicleService] })










export class VehiclesListComponent implements OnInit {
 
  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) {
    this.vehicles = this.vehicleService.getVehicles();
  }


  ngOnInit() {
  }

}
