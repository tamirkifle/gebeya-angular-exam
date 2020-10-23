import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/course.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  course: Course;
  error: false;
  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
  }

  submit(){
    this.courseService.updateCourse(this.course).subscribe(r => {
      this.router.navigate(["/courses"]);
    });
  }


}
