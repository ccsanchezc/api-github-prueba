import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchService } from './git-search.service';
import { AppRoutingmoduleComponent } from './app-routingmodule/app-routingmodule.component';

@NgModule({
  declarations: [
    AppComponent,
    AppRoutingmoduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
