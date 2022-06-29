import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './landing-page/components/home-page/home-page.component';
import { HomeComponent } from './talent/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'talent', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
