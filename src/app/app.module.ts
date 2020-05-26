import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageviewerComponent } from './imageviewer/imageviewer.component';
// import { ImageViewerModule } from 'ng2-image-viewer';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CustomMaterialModule } from './material.module';
import { environment } from 'src/environments/environment';
import { Imageviewer002Component } from './imageviewer002/imageviewer002.component';
import { Login002Component } from './login002/login002.component';
import { Login003Component } from './login003/login003.component';
import { Imageviewer003Component } from './imageviewer003/imageviewer003.component';
// import { annotorious } from 'angular-annotorious';

@NgModule({
  declarations: [
    AppComponent,
    ImageviewerComponent,
    LoginComponent,
    Imageviewer002Component,
    Login002Component,
    Login003Component,
    Imageviewer003Component
  ],
  imports: [
    // annotorious,
    AngularFireModule.initializeApp(environment.firebase, 'evident-healer-278012'),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, BrowserAnimationsModule,FormsModule,CustomMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
