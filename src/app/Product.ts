export class Product {
    id:number = 0;
    name:string = "";
    imgPath:string = "";
    category:string = "";
    price:number = 0;

    constructor(id:number, name:string, category:string, price:number, imgPath:string) {
        this.id = id;
        this.name = name;
        this.imgPath = imgPath;
        this.price = price;
        this.category = category; 
    }
}