import { User } from '../users/interfaces/user.interface';

let users: User[] = [
  { id: '1', name: 'Alice', email: 'alice@example.com' },
  { id: '2', name: 'Bob', email: 'bob@example.com' },
];

export const getUsersData = (): User[] => {
  return [...users];
};

export const saveUseData = (newUser: User[]): void => {
  users = newUser;
};
