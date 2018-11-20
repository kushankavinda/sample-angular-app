import { Component } from '@angular/core';

import { Hero }    from '../hero';
import { HeroServiceService } from 'src/service/hero-service.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor(private service_variable_name: HeroServiceService){
    
  }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit(heroForm) { 
    alert(heroForm.power);
    console.log(heroForm);
   // this.submitted = true; 
    this.service_variable_name.submitForm(heroForm)
    .subscribe(
      res => {
        console.log('this is result : ', res);
        alert(res.values[1]);
      }
    )
  
  }
  

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

