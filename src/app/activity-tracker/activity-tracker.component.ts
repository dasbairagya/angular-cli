import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-tracker',
  templateUrl: './activity-tracker.component.html',
  styleUrls: ['./activity-tracker.component.css'],
})
export class ActivityTrackerComponent {
  title = 'angular2';
  // public done: boolean;

  public todos: any;

  public newToDo: string;

  public newToDoObj: any;

  public error: boolean;

  //public TODOS : Array;

  constructor() {
    this.todos = [];

    this.newToDo = '';

    this.error = false;
  }

  addMore() {
    this.todos.push({ done: true, item: this.newToDo });
  }

  clearAll() {
    this.todos = [];
  }
}
