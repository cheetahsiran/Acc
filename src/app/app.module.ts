import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithoutAuthComponent } from './without-auth/without-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ToastMessageService } from 'src/app/shared/toastService/toast-message.service';
@NgModule({
  declarations: [
    AppComponent,
    WithoutAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
  providers: [ToastMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
