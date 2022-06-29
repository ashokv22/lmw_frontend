import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    HomePageComponent,
  ]
})
export class LandingPageModule { }
