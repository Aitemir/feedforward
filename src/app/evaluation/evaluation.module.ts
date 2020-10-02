import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationTableComponent } from './evaluation-table/evaluation-table.component';
import { EvaluationDialogComponent } from './evaluation-table/evaluation-dialog/evaluation-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [EvaluationTableComponent, EvaluationDialogComponent],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule, 
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatChipsModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatFormFieldModule
  ]
})
export class EvaluationModule { }
