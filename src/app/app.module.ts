import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapsComponent } from './components/maps/maps.component';
import { ModalMapsComponent } from './components/maps/modal-maps/modal-maps.component';

import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({  
  declarations: [
    AppComponent,
    MapsComponent,
    ModalMapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCO9Rq8UbzG0J8lefpNEoHcdXmBub7n_po'
    }),
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
