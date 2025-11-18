import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name should not be empty' })
  @Length(2, 10, {
    message:
      'name must be longer than or equal to 10 characters and quote must be shorter than or equal to 10 characters',
  })
  name: string;

  @IsString({ message: 'email must be a string' })
  @IsNotEmpty({ message: 'email should not be empty' })
  @Length(2, 20, {
    message:
      'email must be longer than or equal to 10 characters and quote must be shorter than or equal to 10 characters',
  })
  email: string;
}
