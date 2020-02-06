import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastMessageService } from 'src/app/shared/toastService/toast-message.service';
@NgModule({
    declarations: [
      ToastMessageService
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
      }),
    ],
    providers: [ToastMessageService],
  })
  export class SharedModule { }