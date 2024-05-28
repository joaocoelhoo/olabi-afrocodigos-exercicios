import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [BrowserModule, UserModule],
  exports: [],
  declarations: [ AppComponent ],
  providers: [],
  bootstrap: [  AppComponent ]
})
export class AppModule { }
