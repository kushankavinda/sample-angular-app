import { Component } from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';
  
  valueComes(eventValue: any) {
    console.log('value commes  works');
    console.log('eventValue : ', eventValue);
  }
  // tslint:disable-next-line:member-ordering
  x:number=1;
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];

            myEvent(event) {
              alert("alert event");
              console.log(event);
            }
  
}
