import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MaterialModule } from '../shared/material.module';
import { StudentCreateComponent } from './student-create/student-create.component';
import { FormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component';


@NgModule({
  declarations: [StudentListComponent, StudentDetailComponent, StudentCreateComponent, StudentEditComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class StudentsModule { }
