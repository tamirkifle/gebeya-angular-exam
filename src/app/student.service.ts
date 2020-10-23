import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsAPI = 'api/students';
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentsAPI);
  }

  getStudent(id): Observable<Student> {
    const url = `${this.studentsAPI}/${id}`;
    return this.http.get<Student>(url);
  }
}
