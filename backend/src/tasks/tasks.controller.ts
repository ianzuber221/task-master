import { CreateTaskDto } from './dto/create-task.dto/create-task.dto';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { UpdateTaskDto } from './dto/update-task.dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return 'This action returns all tasks';
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return 'This action adds a new task ' + JSON.stringify(createTaskDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return 'This action returns a #task ' + id;
  }

  @Post(':id/update')
  @UseGuards(JwtAuthGuard)
  updateTask(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: string) {
    return 'This action updates a #task ' + JSON.stringify(updateTaskDto) + id;
  }

  @Post(':id/delete')
  @UseGuards(JwtAuthGuard)
  deleteTask(@Param('id') id: string) {
    return 'This action removes a #task ' + id;
  }
}
