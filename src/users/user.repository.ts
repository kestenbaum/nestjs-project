import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { getUsersData, saveUseData } from 'src/data/users.data';

@Injectable()
export class UserRepository {
  private users: User[] = [];

  constructor() {
    this.users = getUsersData();
  }

  findAll(): User[] {
    return [...this.users];
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  create(newUser: Omit<User, 'id'>): User {
    const userWithId: User = { id: Date.now().toString(), ...newUser };
    this.users.push(userWithId);
    saveUseData(this.users);
    return userWithId;
  }

  update(id: string, updateUser: Partial<User>): User | undefined {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) return undefined;
    this.users[index] = { ...this.users[index], ...updateUser };
    saveUseData(this.users);
    return this.users[index];
  }

  delete(id: string): boolean {
    const initialLength = this.users.length;
    this.users = this.users.filter((user) => user.id !== id);
    saveUseData(this.users);
    return this.users.length < initialLength;
  }
}
