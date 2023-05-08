import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PicturesService } from './pictures.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  
  @Post('grayscale')
  @UseInterceptors(FileInterceptor('picture'))
  grayscalePicture(@UploadedFile() picture: Express.Multer.File) {
    return this.picturesService.grayscalePicture(picture);
  }
}
