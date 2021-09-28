import { Component } from '@angular/core';

import { Employee, EmployeesService } from './employees.service';

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

  inputData: Employee[] = [];
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

  constructor(employservise: EmployeesService) {
    this.inputData = employservise.getInputData();
    this.outputData = employservise.getOutputData();
  }
}
