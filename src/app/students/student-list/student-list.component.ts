import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];
  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe( students => this.students = students);

  }
  delete(student){
    this.students = this.students.filter(s => s !== student);
    this.studentService.delete(student);
    this.router.navigate(['/students']);
  }
}
