import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WithAuthComponent } from 'src/app/with-auth/with-auth.component';
import { from } from 'rxjs';
const routes: Routes = [{
  path: '',
  component: WithAuthComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WithAuthRoutingModule { }
