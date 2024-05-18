import { Module } from '@nestjs/common';
import { PanbookService } from './panbook.service';
import { PanbookController } from './panbook.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PanbookSchema } from './schemas/panbook.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Panbook', schema: PanbookSchema }])],
  providers: [PanbookService],
  controllers: [PanbookController]
})
export class PanbookModule {}
