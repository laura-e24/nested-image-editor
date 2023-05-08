import { Injectable } from '@nestjs/common';
import { uploadCloudinary } from '../helpers/uploadCloudinary';
import { grayscaleFn } from '../helpers/sharp';

@Injectable()
export class PicturesService {
  async grayscalePicture(picture: Express.Multer.File): Promise<string> {  
    await grayscaleFn(`${process.cwd()}/src/thumbnails/mocked.jpg`) 
    const { url } = await uploadCloudinary(`${process.cwd()}/src/thumbnails/mocked.jpg`)
    return url;
  }
}
