import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavBarComponent,
    HomeComponent
  ]
})
export class TalentModule { }
