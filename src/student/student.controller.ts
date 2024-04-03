import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService) {}


    @Get('all')
    obtainStudents(){
        return this.studentService.findAll()
        
    }

    @Post('create')
    createStudents(@Body() body){
        return this.studentService.create(body)
        
    }

    @Patch('update/:id/userName/:userName')
   updateStudent(@Param() params){
        return this.studentService.update(params)
    }

    @Delete('delete/id/:id')
    deleteStudent(@Param() params){
        return this.studentService.delete(params)
    }
}
