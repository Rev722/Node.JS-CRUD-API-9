import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum Category {
    SGG = 'KOBE',
    SO = 'FAYGO',
    IAYCE = 'JACE!',
}

@Schema({
    timestamps: true,
})

export class Panbook {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const PanbookSchema = SchemaFactory.createForClass(Panbook)