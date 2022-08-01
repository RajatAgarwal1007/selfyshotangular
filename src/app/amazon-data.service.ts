import { Injectable } from '@angular/core';
import { Product } from './Product';
import { ProductsdataService } from './productsdata.service';

@Injectable({
  providedIn: 'root'
})
export class AmazonDataService extends ProductsdataService{
  // productList:Array<Product>;

  constructor() {
    super();
    console.log('AmazonDataService invoked');
    let p1 = new Product(1, "Angular CoolBook", "Technical", 240, "assets/images/angular.jpg");
    let p2 = new Product(2, "Ajax for Dummies", "Technical", 640, "assets/images/ajax.jpg");
    let p3 = new Product(3, "Life Rules", "Self help", 540, "assests/images/liferules.jpg");
    let p4 = new Product(4, "Tinkle", "Comic", 140, "assests/images/twinkle.jpg");
    let p5 = new Product(5, "You can Win", "Self help", 440, "assets/images/youcanwin.jpg");
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);
    // this static values can be replace with http calls
   }
   getProductList():Array<Product> {
    return this.productList;
   }
}
