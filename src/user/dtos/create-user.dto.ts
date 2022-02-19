import { IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @IsOptional()
    @IsString()
    @MaxLength(150)
    name: string;


    @IsOptional()
    @IsString()
    @MaxLength(150)
    LastName: string;


    @IsEmail()
    email: string;
 

   
    @IsString()
    @MinLength(6)
    @MaxLength(150)
    password: string;
    
}
