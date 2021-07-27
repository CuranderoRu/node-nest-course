import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'my@gmail.com', description: 'User email'})
  readonly email: string;
  @ApiProperty({example: '123456789', description: 'User password'})
  readonly password: string;
}