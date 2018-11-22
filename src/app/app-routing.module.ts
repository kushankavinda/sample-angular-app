import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { ViewInquiryComponent } from './view-inquiry/view-inquiry.component';
import { ProgressComponent } from './progress/progress.component';
import { HomeComponent } from './home/home.component';
import { LinechartComponent } from './linechart/linechart.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

const routes: Routes = [{path:'form',component : HeroFormComponent},{path:'new-cmp',component : NewCmpComponent},{path:'imports',component : ViewInquiryComponent},{path:'charts',component : LinechartComponent},{path:'exporters',component : ViewInquiryComponent},{path:'ff',component : ProgressComponent},{path:'cha',component : HomeComponent},{path:'transporters',component : ViewInquiryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
