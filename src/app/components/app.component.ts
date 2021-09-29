import { Component } from '@angular/core';

import { Employee, EmployeesService } from '../servises/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  scheme300 = false;
  scheme400 = false;

  vhodGrid = false;
  vihodGrid = false;

  model300 = '';
  model400 = '';

  consumptionValue300 = '';
  labDimensionValue300 = '';
  consumptionValue400 = '';
  labDimensionValue400 = '';

  inputData: Employee[] = [];
  outputData: Employee[] = [];

  selectedItemKeys: any[] = [];

  onValueChanged = (value: any) => {
    if (value == 'Scheme 300') {
      this.scheme300 = true;
      this.scheme400 = false;
    } else if (value == 'Scheme 400') {
      this.scheme400 = true;
      this.scheme300 = false;
    } else {
      this.scheme300 = false;
      this.scheme400 = false;
    }
  }

  showVhodGrid = () => {
    this.vhodGrid = !this.vhodGrid;
  }
  showVihodGrid = () => {
    this.vihodGrid = !this.vihodGrid;
  }

  fillModel = () => {
    this.model300 = "Pi300";
    this.model400 = "Pi400";
  }

  fillGrid = () => {
    this.consumptionValue300 = 'ConsumptionValue300';
    this.labDimensionValue300 = 'LabDimensionValue300';
    this.consumptionValue400 = 'ConsumptionValue400';
    this.labDimensionValue400 = 'LabDimensionValue400';
  }


  constructor(employservise: EmployeesService) {
    this.inputData = employservise.getInputData();
    this.outputData = employservise.getOutputData();
  }
}
