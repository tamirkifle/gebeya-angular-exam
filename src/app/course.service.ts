import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  coursesAPI = 'api/courses';
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.coursesAPI);
  }

  getCourse(id): Observable<Course> {
    const url = `${this.coursesAPI}/${id}`;
    return this.http.get<Course>(url);
  }
}
