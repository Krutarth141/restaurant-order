export class Foods {
    id!: number;
    name!: string;
    cooktime!:string;
    favorite: boolean=false;
    price!:number;
    origins?:string[];
    star?: number | number[];
    imageurl!:string;
    tags?:string[];
}