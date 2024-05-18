import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PanbookService } from './panbook.service';
import { get } from 'http';
import { Panbook } from './schemas/panbook.schemas';
import { CreatePanbookDto } from './dto/create-panbook.dto';
import { UpdatePanbookDto } from './dto/update-panbook.dto';

@Controller('panbooks')
export class PanbookController {
    constructor (private panbookService: PanbookService) {}

    @Get()
    async getAllPanbooks(): Promise <Panbook[]> {
        return this.panbookService.findAll();
    } 

    @Post()
    async createPanbook(
        @Body()
        panbook: CreatePanbookDto,
    ): Promise <Panbook> {
        return this.panbookService.create(panbook);
    }

    @Get(':id')
    async getPanbook(
        @Param('id')
        id: string,
    ): Promise <Panbook> {
        return this.panbookService.findById(id);
    } 

    @Put(':id')
    async updatePanbook(
        @Param('id')
        id: string,
        @Body()
        panbook: UpdatePanbookDto,
    ): Promise <Panbook> {
        return this.panbookService.updateById(id, panbook);
    } 

    
    @Delete(':id')
    async deletePanbook(
        @Param('id')
        id: string,
    ): Promise <Panbook> {
        return this.panbookService.deleteById(id);
    } 

}
