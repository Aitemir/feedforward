import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EvaluationModule } from './evaluation/evaluation.module';

const routes: Routes = [
  {
    path: 'evaluation',
    loadChildren: ()=> EvaluationModule
  },
  {
    path: '',
    component: AuthComponent,
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
