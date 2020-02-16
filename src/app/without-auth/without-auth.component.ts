import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastMessageService } from 'src/app/shared/toastService/toast-message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-without-auth',
  templateUrl: './without-auth.component.html',
  styleUrls: ['./without-auth.component.css']
})
export class WithoutAuthComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private toastr: ToastMessageService, private route: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  onSubmit() {
    if (this.loginForm.value.email !== '' ||  this.loginForm.value.password !== '') {
      this.toastr.showMessage('warning','all fields are mandatory', 'required');
    } else if(this.loginForm.value.email !=='') {
      this.toastr.showMessage('warning', 'Wrong Email Id', 'Wrong Credential');
    } else if(this.loginForm.value.password !== '') {
      this.toastr.showMessage('warning', 'Wrong Password', 'Wrong Credential');
    } else {
      this.toastr.showMessage('success', 'Login Successfully', 'Success');
      this.route.navigate(['dashboard']);
    }
  }

}
