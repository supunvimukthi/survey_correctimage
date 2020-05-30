import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../app/login/login.component";
import {ImageviewerComponent} from "./imageviewer/imageviewer.component";
import {Login002Component} from "../app/login002/login002.component";
import {Imageviewer002Component} from "./imageviewer002/imageviewer002.component";
import {Login003Component} from "../app/login003/login003.component";
import {Imageviewer003Component} from "./imageviewer003/imageviewer003.component";
import {Imageviewer004Component} from "./imageviewer004/imageviewer004.component";
import {Login004Component} from "../app/login004/login004.component";
import {Login005Component} from "../app/login005/login005.component";
import {Imageviewer005Component} from "./imageviewer005/imageviewer005.component";


const routes: Routes = [
  { path: 'image', component: ImageviewerComponent },
  { path: 'login', component: LoginComponent },
  { path : '', component : LoginComponent},
  { path: 'image002', component: Imageviewer002Component },
  { path: 'login002', component: Login002Component },
  { path: 'image003', component: Imageviewer003Component },
  { path: 'login003', component: Login003Component },
  { path: 'image004', component: Imageviewer004Component },
  { path: 'login004', component: Login004Component },
  { path: 'image005', component: Imageviewer005Component },
  { path: 'login005', component: Login005Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
