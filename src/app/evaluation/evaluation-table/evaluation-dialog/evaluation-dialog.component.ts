import { Component, OnInit, Inject } from '@angular/core';
import { EvaluationHttpService } from 'src/app/shared/evaluation-http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Student} from 'src/app/shared/student.model' 
import { MatSnackBar } from '@angular/material/snack-bar';
import { timeoutWith } from 'rxjs/operators';

@Component({
  selector: 'app-evaluation-dialog',
  templateUrl: './evaluation-dialog.component.html',
  styleUrls: ['./evaluation-dialog.component.css']
})
export class EvaluationDialogComponent implements OnInit {

  student: Student;
  competency: String;
  DOC: String;
  EPA: String;

  constructor(private _evaluationHttpService: EvaluationHttpService,
    public dialogRef: MatDialogRef<EvaluationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.student = <Student>{};
    this.competency = <String>{};
    this.student.studentId = this.data.studentId;
    this.student = this._evaluationHttpService.getStudent(this.student.studentId);
    this.competency = this.data.competency;
    this.DOC = this.data.DOC;
    this.EPA = this.data.EPA;
  }

  submitEvaluation() {
    this.dialogRef.close();
    this.openSnackBar('The evaluation has been graded!');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 1500 })
  }
}
