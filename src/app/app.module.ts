import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { AppService } from './appservice';
import { ResultComponent } from './result/result.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [AppComponent, ResultComponent, DataComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RadioButtonModule,
    ButtonModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
