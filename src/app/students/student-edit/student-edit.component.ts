import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  error: false;
  student: Student;
  
  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getStudent(id)
      .subscribe(student => {
        this.student = student;
        }
        );
  }
  
  submit(){

  }
}
