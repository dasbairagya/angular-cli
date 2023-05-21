import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsComponent } from './forms/forms.component';
import { ActivityTrackerComponent } from './activity-tracker/activity-tracker.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, TestComponent, FormsComponent, ActivityTrackerComponent, DirectivesComponent, EmployeeListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
