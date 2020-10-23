import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MaterialModule } from '../shared/material.module';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { FormsModule } from '@angular/forms';
import { CourseCreateComponent } from './course-create/course-create.component';


@NgModule({
  declarations: [CourseListComponent, CourseDetailComponent, CourseEditComponent, CourseCreateComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class CoursesModule { }
