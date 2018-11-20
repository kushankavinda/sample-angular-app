import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Hero } from 'src/app/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  url ='http://github.com';
  constructor(private http: HttpClient) { }

  public submitForm(form: any) : Observable<any[]> {
    alert("this is name : "+form.name);
    alert(this.http.post<Hero>(this.url, 'kushankavinda'));
    return this.http.get<any>('http://jsonplaceholder.typicode.com/users?id=7');
  }

  hanndleError(err : HttpErrorResponse ) {
    console.error(err);
  }

  AddEmployee(article: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.url, article);
  } 
}
