import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClaseComponent } from './clase/clase.component';
import { EstudianteComponent } from './estudiante/estudiante.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaseComponent,
    EstudianteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
