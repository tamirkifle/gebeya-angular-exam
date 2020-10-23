import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

const routes: Routes = [
  {
    path: 'students',
    children: [
      {
        path: '',
        component: StudentListComponent,
      },
      { path: 'detail/:id', component: StudentDetailComponent },
      { path: 'detail/:id/edit', component: StudentEditComponent },
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
