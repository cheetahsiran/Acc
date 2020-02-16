import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WithAuthRoutingModule } from './with-auth-routing.module';
import { DashboardComponent } from 'src/app/with-auth/dashboard/dashboard.component';
import { WithAuthComponent } from 'src/app/with-auth/with-auth.component';
@NgModule({
  declarations: [
    DashboardComponent,
    WithAuthComponent
  ],
  imports: [
    CommonModule,
    WithAuthRoutingModule
  ]
})
export class WithAuthModule { }
