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
    {evaluationId: 1, task: 'Documentation', firstName: 'John', lastName: 'Smith', evaluated: 'N', studentId: 1},
    {evaluationId: 2, task: 'Diagnostic', firstName: 'Alex', lastName: 'Brown', evaluated: 'N', studentId: 2},
    {evaluationId: 3, task: 'Preventative screenings', firstName: 'Ann', lastName: 'Lee', evaluated: 'Y', studentId: 3},
    {evaluationId: 4, task: 'History and Physical', firstName: 'Aitemir', lastName: 'Yeskenov', evaluated: 'Y', studentId: 4},
    {evaluationId: 5, task: 'Diagnostic', firstName: 'Harvey', lastName: 'Hyman', evaluated: 'N', studentId: 5},
    {evaluationId: 6, task: 'Treatment', firstName: 'Joseph', lastName: 'Goldman', evaluated: 'N', studentId: 6},
    {evaluationId: 7, task: 'Preventative screenings', firstName: 'Martin', lastName: 'Wu', evaluated: 'Y', studentId: 7},
    {evaluationId: 8, task: 'Womens Health', firstName: 'Jonathan', lastName: 'Chancey', evaluated: 'Y', studentId: 8},
    {evaluationId: 9, task: 'Musculoskeletal', firstName: 'Sam', lastName: 'Bluemiller', evaluated: 'N', studentId: 9},
    {evaluationId: 10, task: 'Treatment', firstName: 'Adam', lastName: 'Kim', evaluated: 'Y', studentId: 10},
    {evaluationId: 11, task: 'Musculoskeletal', firstName: 'Alysson', lastName: 'Smith', evaluated: 'N', studentId: 11},
    {evaluationId: 12, task: 'Treatment', firstName: 'Andrew', lastName: 'Gomez', evaluated: 'N', studentId: 12},
    {evaluationId: 13, task: 'History and Physical', firstName: 'Emmanuel', lastName: 'Gonsalez', evaluated: 'N', studentId: 13},
    {evaluationId: 14, task: 'Diagnostic', firstName: 'Artyom', lastName: 'Petrov', evaluated: 'N', studentId: 14},
    {evaluationId: 15, task: 'Musculoskeletal', firstName: 'Nursultan', lastName: 'Nazarbayev', evaluated: 'N', studentId: 15},
    {evaluationId: 16, task: 'LP Procedure', firstName: 'Harry', lastName: 'Potter', evaluated: 'N', studentId: 16},
    {evaluationId: 17, task: 'Pre LP Data review', firstName: 'Peter', lastName: 'Parker', evaluated: 'N', studentId: 17},
    {evaluationId: 18, task: 'Medical Interviewing Skills', firstName: 'Melania', lastName: 'Trump', evaluated: 'N', studentId: 18}
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
