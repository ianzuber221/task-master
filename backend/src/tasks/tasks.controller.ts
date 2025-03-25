import { CreateTaskDto } from './dto/create-task.dto/create-task.dto';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { UpdateTaskDto } from './dto/update-task.dto/update-task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    console.log('This action returns all tasks');
    return this.tasksService.findAll();
  }

  @Post('create')
  @UseGuards(JwtAuthGuard)
  createTask(@Body() createTaskDto: CreateTaskDto) {
    console.log('This action adds a new task ' + JSON.stringify(createTaskDto));
    return this.tasksService.createTask(createTaskDto);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    console.log('This action returns a #task ' + id);
    return this.tasksService.findOne(id);
  }

  @Post(':id/update')
  @UseGuards(JwtAuthGuard)
  updateTask(@Body() updateTaskDto: UpdateTaskDto, @Param('id') id: string) {
    console.log(
      'This action updates a #task ' + JSON.stringify(updateTaskDto) + id
    );
    return this.tasksService.updateTask(updateTaskDto, id);
  }

  @Post(':id/delete')
  @UseGuards(JwtAuthGuard)
  deleteTask(@Param('id') id: string) {
    console.log('This action removes a #task ' + id);
    return this.tasksService.deleteTask(id);
  }
}
