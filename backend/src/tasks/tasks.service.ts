import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  constructor() {}

  findAll() {
    return 'This action returns all tasks';
  }

  createTask(createTaskDto: any) {
    return 'This action adds a new task ' + JSON.stringify(createTaskDto);
  }

  findOne(id: string) {
    return 'This action returns a #task ' + id;
  }

  updateTask(updateTaskDto: any, id: string) {
    return 'This action updates a #task ' + JSON.stringify(updateTaskDto) + id;
  }

  deleteTask(id: string) {
    return 'This action removes a #task ' + id;
  }
}
