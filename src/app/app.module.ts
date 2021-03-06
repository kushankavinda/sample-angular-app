// tslint:disable-next-line:import-spacing
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// tslint:disable-next-line:import-spacing
import { FormsModule }   from '@angular/forms';

// tslint:disable-next-line:import-spacing
import { AppComponent }from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroServiceService } from 'src/service/hero-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewInquiryComponent } from './view-inquiry/view-inquiry.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressComponent } from './progress/progress.component';
import { HomeComponent } from './home/home.component';
import { LinechartComponent } from './linechart/linechart.component';
import { HighlightDirective } from './highlight.directive';
import { PipesexampleComponent } from './pipesexample/pipesexample.component';
import { CustompipeexamplePipe } from './custompipeexample.pipe';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MyserviceService } from './myservice.service';
import { CopyrightComponent } from './copyright/copyright.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    MenuComponent,
    ViewInquiryComponent,
    ProgressComponent,
    HomeComponent,
    LinechartComponent,
    HighlightDirective,
    PipesexampleComponent,
    CustompipeexamplePipe,
    NewCmpComponent,
    CopyrightComponent
  ],
  providers: [ HeroServiceService],
  bootstrap: [ AppComponent]
})
export class AppModule { }
