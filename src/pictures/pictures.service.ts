import { Injectable } from '@nestjs/common';
import sharp from 'sharp';

@Injectable()
export class PicturesService {
  async grayscalePicture(picture: string): Promise<string> {
    const editedPicture = await sharp(picture).withMetadata().grayscale().toBuffer()
    console.log(editedPicture)
    return 'Hello World!';
  }
}
