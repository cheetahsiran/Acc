import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
    declarations: [
      
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      autoDismiss: true,
      maxOpened: 0
      }),
    ],
    providers: [],
  })
  export class SharedModule { }