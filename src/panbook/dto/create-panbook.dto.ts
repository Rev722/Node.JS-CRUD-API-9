import { Category } from "../schemas/panbook.schemas";



export class CreatePanbookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}