import { Component } from '@angular/core';

@Component({
  selector: 'app-test',

  // templateUrl: './test.component.html',
  template: `<h2>->{{ name }}</h2>
    <div>
      <p class="success">Class Binding!</p>
      <p [class]="textSuccess">Class Binding!</p>
      <p [class.error]="hasErr">Conditional Class Binding!</p>
      <p [ngClass]="msgClasses">Conditional Multiple Class Binding!</p>

      <p [style.color]="'orange'">Style Binding!</p>
      <p [style.color]="higlightColor">
        Style Binding as like property binding!
      </p>
      <p [style.color]="hasErr ? 'red' : 'green'">Conditional Style Binding!</p>
      <p [ngStyle]="titleStyles">Multiple Style Binding!</p>
    </div>`,

  // styleUrls: ['./test.component.css']
  styles: [
    `
      .success {
        color: green;
      }
      .error {
        color: red;
        fontStyle: italic;
      }
      .info {
        color: blue;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'Inline Property Binding with template literals!';
  public textSuccess = 'success';
  public higlightColor = 'orange';
  public hasErr = true;
  public info = true;

  public msgClasses = {
    success: !this.hasErr,
    info: this.info,
  };
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
}
