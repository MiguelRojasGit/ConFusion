import {Comment} from './comment'
export class Product{

    id: string="";
    name: string="";
    image: string="";
    category: string="";
    featured: boolean =true;
    label:string="";
    price:string="";
    description:string="";
    comments: Comment[] =[];
}
