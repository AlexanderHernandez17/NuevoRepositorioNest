import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAll(): string;
    getNotes(): string;
    getOnlyOneParamById(id: string): string;
    createStudentByName(body: any): any;
    updateStudents(id: string): string;
    deleteStudent(id: string): string;
    convertNUmber(id: number): number;
}
