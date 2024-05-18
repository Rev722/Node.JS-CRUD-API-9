import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Panbook } from './schemas/panbook.schemas';
import * as mongoose from 'mongoose';

@Injectable()
export class PanbookService {
    constructor (
        @InjectModel(Panbook.name)
        private panbookModel: mongoose.Model <Panbook>
    ) {}

    async findAll(): Promise <Panbook[]> {
        const panbooks = await this.panbookModel.find();
        return panbooks;
    }

    async create(panbook: Panbook): Promise <Panbook> {
        const res = this.panbookModel.create(panbook);
        return res;
    }

    async findById(id: string): Promise <Panbook> {
        const panbook = this.panbookModel.findById(id);

        if(!panbook) {
            throw new NotFoundException('Panbook not Found.')
        }
        return panbook;
    }

    async updateById(id: string, panbook: Panbook): Promise <Panbook> {
        return this.panbookModel.findByIdAndUpdate(id, panbook, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise <Panbook> {
        return this.panbookModel.findByIdAndDelete(id);
    }
}
