import { Controller, Get, Param, Post,Put,Delete, Body, ParseIntPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto,EditPostDto  } from './dtos';
import { PostService } from './post.service';

@ApiTags('Post')
@Controller('post')
export class PostController {

constructor(private readonly postService:  PostService){}

@Get()
async getMany(){
  const data =   await this.postService.getMany()
  return (
    {message:'Success full',
    data 
    
  }
  )
}

@Get(':id')
getOne(@Param('id', ParseIntPipe) id: number){
      
    return (
        this.postService.getOne(id)
      )
}



@Post()
createOne(
@Body() dto : CreatePostDto){

console.log(dto);

return (
    this.postService.createOne(dto)
  )
}

@Put(':id')
editOne(@Param('id') id:number,
 @Body() dto: EditPostDto ){

    return (
        this.postService.editOne(id,dto)
      )

}

@Delete(':id')
deleteOne(@Param('id') id: number){
  
    return (
        this.postService.deleteOne(id)
      )
}





}
