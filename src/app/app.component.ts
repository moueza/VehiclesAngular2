import { Component } from '@angular/core';


//import { VehicleListComponent } from './vehicle-list.component'; from vehic-list


import { VehiclesListComponent} from './vehicles-list/vehicles-list.component';

 @Component({   moduleId: module.id,
      selector: 'vehicles-list',
      templateUrl: 'app.component.html',
      styleUrls: ['app.component.css'],
     directives: [VehiclesListComponent], })
export class AppComponent {
  title = 'Vehicle registry';
}
