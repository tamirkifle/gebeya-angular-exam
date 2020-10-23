import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { AuthGuard } from '../auth/auth.guard';
import { CourseCreateComponent } from './course-create/course-create.component';

const routes: Routes = [
  {
    path: 'courses',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CourseListComponent,
      },
      { path: 'create', component: CourseCreateComponent },
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
