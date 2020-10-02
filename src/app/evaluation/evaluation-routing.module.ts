import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EvaluationTableComponent } from './evaluation-table/evaluation-table.component';


const routes: Routes = [
  {
    path: '',
    component: EvaluationTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluationRoutingModule { }
