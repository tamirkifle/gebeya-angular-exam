import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesAPI = 'api/courses';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.coursesAPI);
  }

  getCourse(id): Observable<Course> {
    const url = `${this.coursesAPI}/${id}`;
    return this.http.get<Course>(url);
  }

  updateCourse(course){
    return this.http.put(this.coursesAPI, course);
  }

  saveCourse(course){
    return this.http.post(this.coursesAPI, course);
  }
  delete(course){
    const id = typeof course === 'number' ? course : course.id;
    const url = `${this.coursesAPI}/${id}`;

    return this.http.delete<Course>(url, this.httpOptions);
  }
}
