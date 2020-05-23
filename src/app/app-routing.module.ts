import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "../app/login/login.component";
import {ImageviewerComponent} from "./imageviewer/imageviewer.component";


const routes: Routes = [
  { path: 'image', component: ImageviewerComponent },
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
