import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PicturesModule } from './pictures/pictures.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PicturesModule],
})
export class AppModule {}
