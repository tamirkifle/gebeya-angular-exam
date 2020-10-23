import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/course.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})
export class CourseCreateComponent implements OnInit {
  error: false;  
  newCourse: Course = {
    id:  null,
    course_name:  null,
    university : null,
  }
  constructor(private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.courseService.saveCourse(this.newCourse).subscribe(s => {
      this.router.navigate(['/courses']);
    })
  }

}
