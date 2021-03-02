import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpInterceptorService } from './providers/http-interceptor.service'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NoopInterceptor } from './http-interceptors/noop-interceptor'


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    HttpInterceptorService,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
