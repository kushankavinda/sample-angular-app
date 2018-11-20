import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  private var_name: string = "Sachithra";

  @Output()
  var_name_event: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }

  buttonClickFunction(paraValue: string) {
    console.log("buttonClickFunction works");
    this.var_name_event.emit(this.var_name);
  }

}
