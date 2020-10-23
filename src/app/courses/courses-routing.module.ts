import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

const routes: Routes = [
  {
    path: 'courses',
    children: [
      {
        path: '',
        component: CourseListComponent,
        
      },
      { path: 'detail/:id', component: CourseDetailComponent },
      { path: 'detail/:id/edit', component: CourseEditComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
