import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Courses } from 'src/app/models/courses';
import { CoursesDataService } from '../../services/courses-data.service';
import { map } from 'rxjs';
import { CoursesFormComponent } from '../courses-form/courses-form.component';
import { MoreInfoFormComponent } from '../more-info-form/more-info-form.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'category', 'profesor', 'action'];
  infoCourses: Courses[] = [];
  course!: Courses
  @ViewChild(MatTable) tabla!: MatTable<any>;

  constructor(
    private coursesDataSrv: CoursesDataService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getInfoCourses()
  }

  getInfoCourses() {
    this.coursesDataSrv.getCourses().pipe(
      map((data: any[]) => data.filter(x => x.category === 'course'))
    ).subscribe((resp) => {
      this.infoCourses = resp
    })
  }

  openAddCourse() {
    const dialogRef = this.dialog.open(CoursesFormComponent, {
      width: '700px',
      data: this.course
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.infoCourses = this.infoCourses.concat(result);
        alert('¡Se añadió un nuevo curso!')
      }
    });
  }

  editCourse(idCourse: string) {
    const course = this.infoCourses.find(x => x.id === idCourse);
    console.log(course)
    if (course) {
      const dialogRef = this.dialog.open(CoursesFormComponent, {
        width: '700px',
        data: {
          id: course.id,
          name: course.name,
          modalidad: course.modalidad,
          profesor: course.profesor
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const item = this.infoCourses.find(x => x.id === result.id)
          const index = this.infoCourses.indexOf(item!);
          this.infoCourses[index] = result
          this.tabla.renderRows();
        }
      });
    }
  }

  deleteCourse(idCourse: string) {
    const course = this.infoCourses.find(x => x.id === idCourse);
    if (course) {
      this.infoCourses = this.infoCourses.filter(x => x.id !== course.id);
    }
  }

  showMore(id: string) {
    const course = this.infoCourses.find(x => x.id === id);
    if (course) {
      const dialogRef = this.dialog.open(MoreInfoFormComponent, {
        width: '1000px',
        data: {
          alumnos: course.alumnos,
          name: course.name
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          const item = this.infoCourses.find(x => x.id === result.id)
          const index = this.infoCourses.indexOf(item!);
          this.infoCourses[index] = result
          this.tabla.renderRows();
        }
      });
    }
  }

}
