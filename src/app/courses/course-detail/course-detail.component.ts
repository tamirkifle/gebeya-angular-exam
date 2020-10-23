import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  constructor(private courseService: CourseService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(id)
      .subscribe(course => this.course = course);
  }

  delete(course){

    this.courseService.delete(course).subscribe(r => {
      console.log(r);
      this.router.navigate(['/courses']);

    });
  }
}
