import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipeexample'
})
export class CustompipeexamplePipe implements PipeTransform {

  transform(val : number) : number {
    return Math.sqrt(val)
}
}
