import {CreateUserDto} from './index'
import {  PartialType } from "@nestjs/mapped-types";

export class EditUserDto extends  PartialType(CreateUserDto){}
