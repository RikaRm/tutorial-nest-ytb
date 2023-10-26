import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto/update-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesServices: CoursesService) { }

    @Get()
    findAll() {
        return this.coursesServices.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coursesServices.findOne(id)
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesServices.create(createCourseDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateCourseDto: UpdateCourseDto) {
        return this.coursesServices.update(UpdateCourseDto, id)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coursesServices.remove(id)
    }
}
/**
 * - começe o projeto com uma especie de todo list
 *  -> o usuario deverá se cadastrar para entrar no site
 *  -> ele pode criar um evento, ou participar de um
 *  -> para criar um evento, basta clicar em um botão e adicionar: data, local, desccricao, qtd max/qtd min
 *  -> já para participar do evento, ele vai listar os eventos e escolher qual irá participar
 *  * importante: o horario dos eventos não poderá conflitar
 * 
 */