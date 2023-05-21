
# Angular Learning! 

## Start Angular with Angular CLI

### Installation:

```
> node -v
> npm -v
> npm install -g @angular/cli
> ng -v
> ng new hello-world
> cd hello-world
> ng serve
> open http://localhost:4200/
```

### Generate new component and add the selector to the main view (app.componenet.html)

```
> ng g c test

output:
CREATE src/app/test/test.component.html (19 bytes)
CREATE src/app/test/test.component.spec.ts (545 bytes)
CREATE src/app/test/test.component.ts (194 bytes)
CREATE src/app/test/test.component.css (0 bytes)
UPDATE src/app/app.module.ts (388 bytes)
```

Note: Newly generated component/module has to be included in app.module.ts
and app.component.html is the start poit to add the new html selectors

#### Three ways to specify the selector for your component

```
specify                                                          usecase
--------------------------------------------------------------------------------------------
> as a custom html tag
@Component({
  selector: 'app-test',                      <app-test></app-test>

})

> as a class
@Component({
  selector: '.app-test',                      <div class="app-test"></div>

})

> enclose a [] bracket
@Component({
  selector: '[app-test]',                    <div app-test></div>

})

```

### Generate the inline template and css

```
@Component({
  selector: 'app-test',
  template: `<div>
              <h2>
              Hello World!
              </h2>
             </div>`,
    styles: [`
        div {
            color: red;
        },
        .success{
            color: red;
            fontStyle: italic
        }
    `]
})

```

### Property binding

#### class binding:

```
    <h2 class="success">Class Binding!</h2>
    <h2 [class]="textSuccess">Class Binding!</h2>
    <h2 [class.error]="hasErr">Conditional Class Binding!</h2>
    <h2 [ngClass]="msgClasses">Conditional Multiple Class Binding!</h2>
```

#### style binding:

```
    <h2 [style.color]="'orange'">Style Binding!</h2>
    <h2 [style.color]="higlightColor">
      Style Binding as like property binding!
    </h2>
    <h2 [style.color]="hasErr ? 'red' : 'green'">Conditional Style Binding!</h2>
    <h2 [ngStyle]="titleStyles">Multiple Style Binding!</h2> `,

```

### Component:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',

  // templateUrl: './test.component.html',
  template: `<h2>{{ name }}</h2>
    <h2 class="success">Class Binding!</h2>
    <h2 [class]="textSuccess">Class Binding!</h2>
    <h2 [class.error]="hasErr">Conditional Class Binding!</h2>
    <h2 [ngClass]="msgClasses">Conditional Multiple Class Binding!</h2>

    <h2 [style.color]="'orange'">Style Binding!</h2>
    <h2 [style.color]="higlightColor">
      Style Binding as like property binding!
    </h2>
    <h2 [style.color]="hasErr ? 'red' : 'green'">Conditional Style Binding!</h2>
    <h2 [ngStyle]="titleStyles">Multiple Style Binding!</h2> `,

  // styleUrls: ['./test.component.css']
  styles: [
    `
      .success {
        color: green;
      }
      .error {
        color: red;
        fontstyle: italic;
      }
      .info {
        color: blue;
      }
    `,
  ],
})
export class TestComponent {
  public name = 'Property Binding!';
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

```

### Template Reference Variables e.g (#myInput)

```
<input #myInput type="text">
<button (click) = "logMsg(myInput)">log</button>

```

### Two way binding

you need to import the forms module in app.module.ts file for this since ngModule is a part of forms module

```
<input [(ngModel)]="name" type="text">
{{name}}

```

### Structural Directives

#### Add or removehtml elements

```
ngIf
ngSwitch
ngFor
```

### use case of ngIf:

using template reference #<>

```
<div *ngIf="displayName; then thenBlock; else elseBlock">

<ng-template #thenBlock>
<p>Success</p>
</ng-template>

<ng-template #elseBlock>
<p>Hidden</p>
</ng-template>
```


### Service
```
> ng g s employee
```
the above command will generage employee.service.ts in your app root dir

### Register the service with injector
to get the service in all the components inject the service in your root module(app.module.ts) via provider metadata
and at the top of the class mention the decorator @Injectable()
```
providers: [EmployeeSrvice]
```

Now declare as dipendency in the components which need EmployeeService

### Api interation

1. include the HttpClientModule module in the app.module.ts
2. injected the module as a dependency at the EmployeeService service
3. get() method retuns an Observable but we need to convert it to a usable type in our applicaton
4. Hence we create an interface and pass the Observable and caset to an array of Employees
5. but the Observable does not provide the data hence subscibe() is required when implementing the results