import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return 'This action returns all users';
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return 'This action returns one user ' + id;
  }

  @Put(':id/update')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateUserDto: any) {
    return 'This action updates a user ' + id + JSON.stringify(updateUserDto);
  }

  @Get(':id/delete')
  @UseGuards(JwtAuthGuard)
  delete(@Param('id') id: string) {
    return 'This action deletes a user ' + id;
  }

  @Get(':id/tasks')
  @UseGuards(JwtAuthGuard)
  findTasks(@Param('id') id: string) {
    return 'This action returns all tasks for a user ' + id;
  }
}
