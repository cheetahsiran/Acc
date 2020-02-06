import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-without-auth',
  templateUrl: './without-auth.component.html',
  styleUrls: ['./without-auth.component.css']
})
export class WithoutAuthComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

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
    console.log('this.loginform', this.loginForm);
    // this.loginForm.submit();
  }

}
