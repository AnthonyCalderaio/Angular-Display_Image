import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageChangerComponent } from './image-changer/image-changer.component';
import { BackgroundColorsComponent } from './background-colors/background-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageChangerComponent,
    BackgroundColorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
