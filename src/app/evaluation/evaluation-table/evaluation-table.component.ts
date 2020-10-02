import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EvaluationHttpService } from 'src/app/shared/evaluation-http.service';
import { Evaluation } from 'src/app/shared/evaluation.model';
import { EvaluationDialogComponent } from './evaluation-dialog/evaluation-dialog.component';

@Component({
  selector: 'app-evaluation-table',
  templateUrl: './evaluation-table.component.html',
  styleUrls: ['./evaluation-table.component.css']
})
export class EvaluationTableComponent implements OnInit {

  isLoadingResults = true; 
  error: string;
  evaluations: Evaluation[] = [];

  displayedColumns: string[] = ['evaluationId', 'task', 'firstName', 
  'lastName', 'action'];
  dataSource: MatTableDataSource<Evaluation>;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private _evaluationHttpService: EvaluationHttpService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    const evaluationObservable = this._evaluationHttpService.getEvaluations();
    this.evaluations = evaluationObservable;
    this.loadData();
      /*evaluationObservable.subscribe((data: Evaluation[])=> {
        this.isLoadingResults = false;
        this.evaluations = data;
        this.loadData();
      }, error => {
        this.error = error;
      });*/
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadData() {
    this.dataSource = new MatTableDataSource<Evaluation>(this.evaluations);
    this.dataSource.sort = this.sort; 
    setTimeout(() => this.dataSource.paginator = this.paginator);
    setTimeout(() => {this.isLoadingResults = false}, 2000);
  }

  refresh() {
    this.isLoadingResults = false;
    const evaluationObservable = this._evaluationHttpService.getEvaluations();
    this.evaluations = evaluationObservable;
    this.loadData();
      /*evaluationObservable.subscribe((data: Evaluation[])=> {
        this.isLoadingResults = false;
        this.evaluations = data;
        this.loadData();
      }, error => {
        this.error = error;
      });*/
    }

    openActionDialog(studentId: string, task: string ){
      const dialogRef = this.dialog.open(EvaluationDialogComponent, {
        width: '480px',
        data: {studentId: studentId, task: task}
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result == true) { 
          this.refresh() 
        } 
        else { 
          this.error = result       
        }
      }); 
    }
}
