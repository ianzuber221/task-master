import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  findAll() {
    return 'This action returns all users';
  }

  findOne(id: string) {
    return 'This action returns one user ' + id;
  }

  update(id: string, updateUserDto: any) {
    return 'This action updates a user ' + id + JSON.stringify(updateUserDto);
  }

  delete(id: string) {
    return 'This action deletes a user ' + id;
  }

  findTasks(id: string) {
    return 'This action returns all tasks for a user ' + id;
  }
}
