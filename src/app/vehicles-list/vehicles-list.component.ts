import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../model/vehicle';

import { VehicleService } from '../model/vehicle.service';

//TODO relative  moduleId: module.id,
@Component({  
      selector: 'app-vehicles-list',
      templateUrl: 'app/vehicles-list/vehicles-list.component.html',
      styleUrls: ['app/vehicles-list/vehicles-list.component.css'],
      providers: [VehicleService] })










export class VehiclesListComponent implements OnInit {
 
  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) {
    this.vehicles = this.vehicleService.getVehicles();
  }


  ngOnInit() {
  }

}
