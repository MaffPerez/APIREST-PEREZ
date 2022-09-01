import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Courses } from 'src/app/models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesDataService {
  courses: any[] = [];
  coursesSubject: Subject<any>;

  constructor(private http: HttpClient) { 
    this.coursesSubject = new Subject();
  }

  getCourses(): Observable<Courses[]>{
    const url= "../assets/data/courses.json";
    return this.http.get<Courses[]>(url)
   }

  getObsCourses(){
    return this.coursesSubject.asObservable();
  }

  addNewCourse(course: any){
    this.courses.push(course);
    this.coursesSubject.next(this.courses);
  }

  promiseCourses(){
    return new Promise((resolve, reject) => {
      if(this.courses.length > 0){
        resolve(this.courses);
      }else{
        reject({
          codigo: 0,
          mensaje: 'Aún no hay cursos.'
        });
      }
    });
  }
}
