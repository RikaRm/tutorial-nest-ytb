import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1
            , name: 'Fundamentos do framework Nestjs'
            , description: "Fundamentos do framework Nestjs"
            , tags: ['Node.js', 'Typescript', 'Web', 'Nestjs', 'Javacript']
        }
    ]

    findAll() {
        return this.courses
    }

    findOne(id: string) {
        const courses = this.courses.find((course) => { return course.id === Number(id) })
        if (!courses) {
            throw new HttpException(`Course id: ${id} not found`, HttpStatus.NOT_FOUND)
        }
        return courses
    }

    create(createCourseDTO: any): void {
        this.courses.push(createCourseDTO)
        return createCourseDTO
    }

    update(updateCourseDTO: any, id: string): void {
        const indexCourse = this.courses.findIndex(c => c.id === Number(id))
        this.courses[indexCourse] = updateCourseDTO
    }

    remove(id: string): void {
        const indexCourse = this.courses.findIndex((c) => c.id === Number(id))

        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1)
        } else {
            throw new HttpException(`Course id: ${id} not found`, HttpStatus.NOT_FOUND)
        }
    }
}
