import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity/task.entity';
import { CreateTaskDto } from './dto/create-task.dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>
  ) {}

  findAll = async () => {
    try {
      return await this.taskRepository.find();
    } catch (err) {
      throw new InternalServerErrorException('Database query failure' + err);
    }
  };

  createTask = async (createTaskDto: CreateTaskDto) => {
    console.log('This action adds a new task ' + JSON.stringify(createTaskDto));
    try {
      return await this.taskRepository.save(createTaskDto);
    } catch (err) {
      throw new InternalServerErrorException('Database query failure' + err);
    }
  };

  findOne = async (id: string) => {
    console.log('This action returns a #task ' + id);
    try {
      return await this.taskRepository.findOne({ where: { id } });
    } catch (err) {
      throw new InternalServerErrorException('Database query failure' + err);
    }
  };

  updateTask = async (updateTaskDto: UpdateTaskDto, id: string) => {
    console.log(
      'This action updates a #task ' + JSON.stringify(updateTaskDto) + id
    );
    try {
      return await this.taskRepository.update(id, updateTaskDto);
    } catch (err) {
      throw new InternalServerErrorException('Database query failure' + err);
    }
  };

  deleteTask = async (id: string) => {
    console.log('This action removes a #task ' + id);
    try {
      return await this.taskRepository.delete(id);
    } catch (err) {
      throw new InternalServerErrorException('Database query failure' + err);
    }
  };
}
