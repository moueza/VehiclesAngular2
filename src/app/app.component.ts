//import { Component, Input } from '@angular/core';
import { Component} from '@angular/core';


//import { VehicleListComponent } from './vehicle-list.component'; from vehic-list


import { VehiclesListComponent} from './vehicles-list/vehicles-list.component';
//TODO relative  moduleId: module.id,
@Component({ 
      selector: 'vehicles-list',
      templateUrl: 'app/app.component.html',
      styleUrls: ['app/app.component.css'],
    })
export class AppComponent {
  title = 'Vehicle registry';
}
