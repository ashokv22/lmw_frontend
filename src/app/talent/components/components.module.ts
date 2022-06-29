import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
