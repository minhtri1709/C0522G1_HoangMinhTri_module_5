import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoundownTimerComponent } from './coundown-timer/coundown-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    CoundownTimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
