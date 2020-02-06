import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {
  constructor(private toastr: ToastrService) { }
  showMessage(type, title, message) {
    this.toastr[type](title, message)
  }
}
