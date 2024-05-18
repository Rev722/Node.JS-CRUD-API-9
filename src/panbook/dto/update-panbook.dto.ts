import { Category } from "../schemas/panbook.schemas";



export class UpdatePanbookDto{
    readonly title: string; 
    readonly description: string;
    readonly author: string;
    readonly price: number;
    readonly category: Category;
}