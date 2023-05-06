import { Body, Controller, Get, Post } from '@nestjs/common';
import { PicturesService } from './pictures.service';

@Controller('pictures')
export class PicturesController {
  constructor(private readonly picturesService: PicturesService) {}

  
  @Post()
  grayscalePicture(@Body() picture: string) {
    return this.picturesService.grayscalePicture(picture);
  }
}
