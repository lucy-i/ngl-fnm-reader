import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReaderComponent } from './reader/reader.component';
import { FNMDatePipe } from './reader/reader.pipes';
import { OrderByPipe } from './orderBy.pipe';
import { ControlsModule } from './controls/control.module';
import { externString } from './libs/string';
// import { ReaderComponent } from "app/reader/reader.component";
// import { FNMDatePipe } from 'app/reader/reader.pipes';
// import { externString } from 'app/libs/string';
// import { OrderByPipe } from 'app/orderBy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    FNMDatePipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent, ReaderComponent]
})
export class AppModule {

  constructor() {
    externString();
  }

}
