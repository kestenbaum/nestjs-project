import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  getAllUsers() {
    return this.userRepository.findAll();
  }

  getUserById(id: string): User | undefined {
    return this.userRepository.findById(id);
  }

  addNewUser(name: string, email: string): User {
    return this.userRepository.create({ name, email });
  }

  updateUser(id: string, name?: string, email?: string): User | undefined {
    return this.userRepository.update(id, { name, email });
  }

  deleteUser(id: string): boolean {
    return this.userRepository.delete(id);
  }
}
