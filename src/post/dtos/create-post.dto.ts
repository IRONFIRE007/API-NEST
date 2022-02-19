import { IsArray, IsBoolean, IsEnum, IsInt, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { Postcategory } from "../enums";

export class CreatePostDto{



      @IsString()
      slug: string;

      @IsString()
      excerpt:string;

      @IsString()
      content:string;

      @IsEnum(Postcategory,{
            message: `Invaled Option. Las opciones correctas son ${EnumToString(Postcategory)}`
      })
      category:Postcategory;
      
      @IsArray()
      @IsString({each : true})
      tags:string[];

      @IsBoolean()
      status:boolean;




}