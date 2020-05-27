import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../app/login/login.component";
import {ImageviewerComponent} from "./imageviewer/imageviewer.component";
import {Login002Component} from "../app/login002/login002.component";
import {Imageviewer002Component} from "./imageviewer002/imageviewer002.component";
import {Login003Component} from "../app/login003/login003.component";
import {Imageviewer003Component} from "./imageviewer003/imageviewer003.component";


const routes: Routes = [
  { path: 'image', component: ImageviewerComponent },
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent},
  { path: 'image002', component: Imageviewer002Component },
  { path: 'login002', component: Login002Component },
  { path: 'image003', component: Imageviewer003Component },
  { path: 'login003', component: Login003Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
