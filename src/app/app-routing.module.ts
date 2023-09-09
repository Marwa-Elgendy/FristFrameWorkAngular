import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';
import { CONTACTComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'' ,redirectTo:'home' ,pathMatch:'full', title:'home'},
  {path:'home' ,component:HomeComponent , title:'home'},
  {path:'about' , component:ABOUTComponent, title:'about'},
  {path:'portfolio' , component:PORTFOLIOComponent, title:'portfolio'},
  {path:'contact',component:CONTACTComponent, title:'contact'},
  {path:'**', component:NotfoundComponent, title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
