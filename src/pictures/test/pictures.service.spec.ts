import { Test, TestingModule } from '@nestjs/testing';
import { PicturesService } from '../pictures.service';

describe('PicturesService', () => {
  let service: PicturesService;
  const mockFile = {
    fieldname: 'picture',
    originalname: 'mock.jpg',
    encoding: '8bit',
    mimetype: 'image/jpg',
    size: 35640,
    destination: __dirname + '/src/uploads',
    filename: 'edited-mock.jpg',
    path: __dirname + '/mock/mock.jpg',
    buffer: Buffer.from(__dirname + '/mock/mock.jpg', 'utf8'),
  } as Express.Multer.File

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PicturesService],
    }).compile();

    service = module.get<PicturesService>(PicturesService);
  });

  it('should be defined', async () => {
    const mockPicture = await service.grayscalePicture(mockFile);
    
    expect(mockPicture).toMatch("http://res.cloudinary.com/")
  });
});
