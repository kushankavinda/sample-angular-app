import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';





@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 // template: `<h1 my-error>Hello {{name}}</h1>`
})
export class AppComponent {
  title = 'angular-forms';
  
  valueComes(eventValue: any) {
    console.log('value commes  works');
    console.log('eventValue : ', eventValue);
  }
  // tslint:disable-next-line:member-ordering
  x:number=1;
  y:string="To upper case using pipes";
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];

            myEvent(event) {
              alert("alert event");
              console.log(event);
            }

            
}
