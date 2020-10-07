import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, timeout } from 'rxjs/operators'; 
import { Observable, throwError } from 'rxjs';
import { Evaluation } from './evaluation.model';
import { Student } from './student.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' 
  })
};

@Injectable({
  providedIn: 'root'
})
export class EvaluationHttpService {

  constructor(private http: HttpClient) { }

  private serviceUrl = 'someUrl';

  evaluations: Evaluation[] = [
    {evaluationId: 1, competency: 'Documentation', firstName: 'John', lastName: 'Smith', evaluated: 'N', studentId: 1, EPA: 'Procedure Prep', DOC: 'Diagnostic', date: '06-10-2020'},
    {evaluationId: 2, competency: 'Diagnostic', firstName: 'Alex', lastName: 'Brown', evaluated: 'N', studentId: 2, EPA: 'Clinical Scenarios', DOC: 'Treatment', date: '06-15-2020'},
    {evaluationId: 3, competency: 'Preventative screenings', firstName: 'Ann', lastName: 'Lee', evaluated: 'Y', studentId: 3, EPA: 'Procedures', DOC: 'Clinical Setting', date: '07-22-2020'},
    {evaluationId: 4, competency: 'History and Physical', firstName: 'Aitemir', lastName: 'Yeskenov', evaluated: 'Y', studentId: 4, EPA: 'Procedure Prep', DOC: 'Treatment', date: '08-14-2020'},
    {evaluationId: 5, competency: 'Diagnostic', firstName: 'Harvey', lastName: 'Hyman', evaluated: 'N', studentId: 5, EPA: 'Procedure Prep', DOC: 'Treatment', date: '06-16-2020'},
    {evaluationId: 6, competency: 'Treatment', firstName: 'Joseph', lastName: 'Goldman', evaluated: 'N', studentId: 6, EPA: 'Clinical Scenarios', DOC: 'Clinical Setting', date: '06-18-2020'},
    {evaluationId: 7, competency: 'Preventative screenings', firstName: 'Martin', lastName: 'Wu', evaluated: 'Y', studentId: 7, EPA: 'Clinical Scenarios', DOC: 'Diagnostic', date: '09-04-2020'},
    {evaluationId: 8, competency: 'Womens Health', firstName: 'Jonathan', lastName: 'Chancey', evaluated: 'Y', studentId: 8, EPA: 'Clinical Scenarios', DOC: 'Treatment', date: '09-10-2020'},
    {evaluationId: 9, competency: 'Musculoskeletal', firstName: 'Sam', lastName: 'Bluemiller', evaluated: 'N', studentId: 9, EPA: 'Procedure Prep', DOC: 'Clinical Setting', date: '09-10-2020'},
    {evaluationId: 10, competency: 'Treatment', firstName: 'Adam', lastName: 'Kim', evaluated: 'Y', studentId: 10, EPA: 'Procedure Prep', DOC: 'Treatment', date: '09-01-2020'},
    {evaluationId: 11, competency: 'Musculoskeletal', firstName: 'Alysson', lastName: 'Smith', evaluated: 'N', studentId: 11, EPA: 'Procedure Prep', DOC: 'Treatment', date: '08-26-2020'},
    {evaluationId: 12, competency: 'Treatment', firstName: 'Andrew', lastName: 'Gomez', evaluated: 'N', studentId: 12, EPA: 'Documentation Proficiency', DOC: 'Clinical Setting', date: '08-26-2020'},
    {evaluationId: 13, competency: 'History and Physical', firstName: 'Emmanuel', lastName: 'Gonsalez', evaluated: 'N', studentId: 13, EPA: 'Documentation Proficiency', DOC: 'Clinical Setting', date: '08-22-2020'},
    {evaluationId: 14, competency: 'Diagnostic', firstName: 'Artyom', lastName: 'Petrov', evaluated: 'N', studentId: 14, EPA: 'Documentation Proficiency', DOC: 'Treatment', date: '09-11-2020'},
    {evaluationId: 15, competency: 'Musculoskeletal', firstName: 'Nursultan', lastName: 'Nazarbayev', evaluated: 'N', studentId: 15, EPA: 'Clinical Scenarios', DOC: 'Treatment', date: '09-11-2020'},
    {evaluationId: 16, competency: 'LP Procedure', firstName: 'Harry', lastName: 'Potter', evaluated: 'N', studentId: 16, EPA: 'Clinical Scenarios', DOC: 'History and Physical', date: '08-25-2020'},
    {evaluationId: 17, competency: 'Pre LP Data review', firstName: 'Peter', lastName: 'Parker', evaluated: 'N', studentId: 17, EPA: 'Clinical Scenarios', DOC: 'History and Physical', date: '09-25-2020'},
    {evaluationId: 18, competency: 'Medical Interviewing Skills', firstName: 'Melania', lastName: 'Trump', evaluated: 'N', studentId: 18, EPA: 'Clinical Scenarios', DOC: 'Treatment', date: '09-01-2020'}
  ];

  students: Student[] = [
    {studentId: 1, firstName: 'John', lastName: 'Smith', evaluated: 'N'},
    {studentId: 2, firstName: 'Alex', lastName: 'Brown', evaluated: 'N'},
    {studentId: 3, firstName: 'Ann', lastName: 'Lee', evaluated: 'Y'},
    {studentId: 4, firstName: 'Aitemir', lastName: 'Yeskenov', evaluated: 'Y'},
    {studentId: 5, firstName: 'Harvey', lastName: 'Hyman', evaluated: 'N'},
    {studentId: 6, firstName: 'Joseph', lastName: 'Goldman', evaluated: 'N'},
    {studentId: 7, firstName: 'Martin', lastName: 'Wu', evaluated: 'Y'},
    {studentId: 8, firstName: 'Jonathan', lastName: 'Chancey', evaluated: 'Y'},
    {studentId: 9, firstName: 'Sam', lastName: 'Bluemiller', evaluated: 'N'},
    {studentId: 10, firstName: 'Adam', lastName: 'Kim', evaluated: 'Y'},
    {studentId: 11, firstName: 'Alysson', lastName: 'Smith', evaluated: 'N'},
    {studentId: 12, firstName: 'Andrew', lastName: 'Gomez', evaluated: 'N'},
    {studentId: 13, firstName: 'Emmanuel', lastName: 'Gonsalez', evaluated: 'N'},
    {studentId: 14, firstName: 'Artyom', lastName: 'Petrov', evaluated: 'N'},
    {studentId: 15, firstName: 'Nursultan', lastName: 'Nazarbayev', evaluated: 'N'},
    {studentId: 16, firstName: 'Harry', lastName: 'Potter', evaluated: 'N'},
    {studentId: 17, firstName: 'Peter', lastName: 'Parker', evaluated: 'N'},
    {studentId: 18, firstName: 'Melania', lastName: 'Trump', evaluated: 'N'},
  ];

  getEvaluations(): Evaluation[] {
    return this.evaluations;
  }

  getStudents(): Student[] {
    return this.students
  }

  getStudent(studentId: number): Student {
    for (let i = 0; i < this.students.length; i++) {
      if (studentId == this.students[i].studentId) {
        let student = this.students[i];
        return student;
      }
    }
  }

  getHttpEvaluations(): Observable<Evaluation[]> {
    return this.http.get<Evaluation[]>(this.serviceUrl + '').pipe(
      timeout(5000),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      );
  }
}
