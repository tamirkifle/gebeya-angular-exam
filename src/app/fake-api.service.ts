import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './models/student';
import { Course } from './models/course';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService implements InMemoryDbService {
  createDb() {
    const students: Student[] = [

      { id: 1, first_name: 'Amby', last_name: "O'Bradain", email: "aobradain0@goo.gl", gender: "Male" },
      { id: 2, first_name: "Mari", last_name: "Gozzard", email: "mgozzard1@house.gov", gender: "Female" },
      { id: 3, first_name: "Casandra", last_name: "Jessope", email: "cjessope2@elegantthemes.com", gender: "Female" },
      { id: 4, first_name: "Piggy", last_name: "Dalloway", email: "pdalloway3@angelfire.com", gender: "Male" },
      { id: 5, first_name: "Ulberto", last_name: "Tebb", email: "utebb4@ameblo.jp", gender: "Male" },
      { id: 6, first_name: "Gawen", last_name: "Badby", email: "gbadby5@issuu.com", gender: "Male" },
      { id: 7, first_name: "Hersh", last_name: "Whittlesey", email: "hwhittlesey6@hp.com", gender: "Male" },
      { id: 8, first_name: "Hinda", last_name: "Haffenden", email: "hhaffenden7@altervista.org", gender: "Female" },
      { id: 9, first_name: "Delmor", last_name: "Yarnley", email: "dyarnley8@slate.com", gender: "Male" },
      { id: 10, first_name: "Lianna", last_name: "Agronski", email: "lagronski9@virginia.edu", gender: "Female" },
      { id: 11, first_name: "Shawnee", last_name: "Pearle", email: "spearlea@ft.com", gender: "Female" },
      { id: 12, first_name: "Corney", last_name: "Beau", email: "cbeaub@hostgator.com", gender: "Male" },
      { id: 13, first_name: "Bartlet", last_name: "Campbell", email: "bcampbellc@jalbum.net", gender: "Male" },
      { id: 14, first_name: "Levon", last_name: "Reedman", email: "lreedmand@cpanel.net", gender: "Male" },
      { id: 15, first_name: "Waring", last_name: "Le Gallo", email: "wlegalloe@eventbrite.com", gender: "Male" },
    ];

    const courses: Course[] = [
        {id: 1, course_name: "Human Resources", university: "Southern Cross University"},
        {id: 2, course_name: "Human Resources", university: "Tokai Women's College"},
        {id: 3, course_name: "Human Resources", university: "Universidad Chapultepéc"},
        {id: 4, course_name: "Legal", university: "Universidad Autónoma de Zacatecas"},
        {id: 5, course_name: "Marketing", university: "Shaheed Beheshti University of Medical Sciences"},
        {id: 6, course_name: "Research and Development", university: "Gandhara Institute of Medical Sciences"},
        {id: 7, course_name: "Legal", university: "Mount Olive College"},
        {id: 8, course_name: "Business Development", university: "Al-Isra University"},
        {id: 9, course_name: "Accounting", university: "University of the Cordilleras"},
        {id: 10, course_name: "Business Development", university: "Universidad Católica de Occidente"},
        {id: 11, course_name: "Legal", university: "Washburn University"},
        {id: 12, course_name: "Engineering", university: "Hainan University"},
        {id: 13, course_name: "Business Development", university: "Kyorin University"},
        {id: 14, course_name: "Services", university: "Sultan Mizan Zainal Abidin Polytechnic"},
        {id: 15, course_name: "Legal", university: "Kansas City Art Institute"}
    ];
    return { students, courses};
  }

  genId(item): number {
    return item.length > 0 ? Math.max(...item.map(it => it.id)) + 1 : 1;
  }
}