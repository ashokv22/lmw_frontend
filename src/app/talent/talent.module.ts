import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    NavBarComponent,
    HomeComponent
  ]
})
export class TalentModule { }
