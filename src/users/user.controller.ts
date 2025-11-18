import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import type { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAll(): User[] {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  getOne(@Param('id') id: string): User {
    const user = this.userService.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User with ID '${id}' not found`);
    }
    return user;
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    return this.userService.addNewUser(name, email);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: Partial<User>): User {
    const updateUser = this.userService.updateUser(
      id,
      updateUserDto.name,
      updateUserDto.email,
    );
    if (!updateUser) {
      throw new NotFoundException(`User with ID '${id}' not found`);
    }
    return updateUser;
  }

  @Delete(':id')
  delete(@Param('id') id: string): { message: string } {
    const deleted = this.userService.deleteUser(id);
    if (!deleted) {
      throw new NotFoundException(`User with ID "${id}" not found.`);
    }
    return { message: `User with ID "${id}" deleted successfully.` };
  }
}
