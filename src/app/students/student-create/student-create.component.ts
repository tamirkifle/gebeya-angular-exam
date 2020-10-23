import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  error: false;  
  newStudent: Student = {
    id:  null,
    first_name:  null,
    last_name : null,
  }
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    this.studentService.saveStudent(this.newStudent).subscribe(s => {
      this.router.navigate(['/students']);
    })
  }
}
