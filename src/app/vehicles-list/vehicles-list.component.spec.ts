/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehicleListComponent } from './vehicle-list.component';





import { VehicleService } from './vehicle.service';//moi

describe('VehiclesListComponent', () => {
  let component: VehiclesListComponent;
  let fixture: ComponentFixture<VehiclesListComponent>;


  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
      
  let component = new VehiclesListComponent(this._injector.get(VehicleService));//moi

    expect(component).toBeTruthy();
  });
});
