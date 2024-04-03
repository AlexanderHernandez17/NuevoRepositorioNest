import { Body, Injectable, NotFoundException, Param } from '@nestjs/common';
import { Student } from './student.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class StudentService {

    constructor(@InjectModel(Student.name) private studentModel: Model<Student>,) {}


    findAll(){
        return this.studentModel.find().exec();
    }

    async create(@Body() body): Promise<Student> {

        const studentData = {
            userName: body.userName,
            email: body.email,
            password: body.password
        }
        const student = new this.studentModel(studentData)
        return await student.save();
        
    }

    async findOne(id: string) {
        const student = this.studentModel.findOne({id: id});
        if (!Student) {
            throw new NotFoundException(`Student #${id} not found`)
            
        }
        return student;
    }

    async delete(@Param() params): Promise<Student> {
        return await this.studentModel.findOneAndDelete({_id: params.id})
    }

    async update(@Param() params): Promise<Student> {
        return await this.studentModel.findOneAndUpdate({_id: params.id}, {$set:{userName: params.userName}})
    }
}


