import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports:      [ BrowserModule,  AppRoutingModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SearchBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
