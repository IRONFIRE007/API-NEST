import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto, EditPostDto } from './dtos';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {

constructor(
  @InjectRepository(Post)
 private readonly postRepository: Repository<Post>
){}


async createOne(dto : CreatePostDto){
  const post = this.postRepository.create(dto as any);
        return  await this.postRepository.save(post);
  }
    
async getMany():Promise<Post[]>{
return await this.postRepository.find()


}

async getOne(id: number){
 const post = await this.postRepository.findOne(id);

 if(!post) throw new NotFoundException("Id not found");

 return post;

}

async editOne(id: number,dto:EditPostDto){

  const post = await this.postRepository.findOne(id);

  if(!post) throw new NotFoundException("Not found");
   
   const editedPost = Object.assign(post,dto);
   return await this.postRepository.save(editedPost);

}

async deleteOne(id: number){
  const post = await this.postRepository.findOne(id);
  if(!post) throw new NotFoundException("Id not found");

   await this.postRepository.delete(id);

   return { message: "Success Fulll porcess of elimination"}

}



}
