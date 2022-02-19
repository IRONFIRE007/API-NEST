import { CreatePostDto } from "./create-post.dto";
import { OmitType, PartialType } from "@nestjs/mapped-types";


export class EditPostDto extends PartialType(
    OmitType(CreatePostDto,[])
){}