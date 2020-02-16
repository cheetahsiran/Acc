import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithoutAuthComponent } from 'src/app/without-auth/without-auth.component';

const routes: Routes = [
  {
    path: '',
    component: WithoutAuthComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('src/app/with-auth/with-auth.module').then(m => m.WithAuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
