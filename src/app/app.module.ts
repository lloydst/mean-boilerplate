import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleGuideComponent,
    HomeComponent,
    HeaderComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
