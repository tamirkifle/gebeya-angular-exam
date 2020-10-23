import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentsAPI = 'api/students';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.studentsAPI);
  }

  getStudent(id): Observable<Student> {
    const url = `${this.studentsAPI}/${id}`;
    return this.http.get<Student>(url);
  }

  updateStudent(student){
    return this.http.put(this.studentsAPI, student);
  }

  saveStudent(student){
    return this.http.post(this.studentsAPI, student);
  }

  delete(student){
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.studentsAPI}/${id}`;

    return this.http.delete<Student>(url, this.httpOptions)
  }
}
