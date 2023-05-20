import { Component } from '@angular/core';

@Component({
  selector: 'app-forms', //check app.component.html
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent {
  public name = 'Gopal!';
  public flag = true;

  logMsg(val: any) {
    console.log(val);
  }
}
