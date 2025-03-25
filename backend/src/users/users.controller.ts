import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    console.log('This action returns all users');
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    console.log('This action returns one user ' + id);
    return this.usersService.findOne(id);
  }

  @Put(':id/update')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    console.log(
      'This action updates a user ' + id + JSON.stringify(updateUserDto)
    );
    return this.usersService.update(id, updateUserDto);
  }

  @Get(':id/delete')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    console.log('This action deletes a user ' + id);
    return this.usersService.delete(id);
  }

  @Get(':id/tasks')
  @UseGuards(JwtAuthGuard)
  findTasks(@Param('id') id: string) {
    console.log('This action returns all tasks for a user ' + id);
    return this.usersService.findTasks(id);
  }
}
