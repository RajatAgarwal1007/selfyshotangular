import { Injectable } from '@angular/core';
import { Product } from './Product';
import { ProductsdataService } from './productsdata.service';

@Injectable({
  providedIn: 'root'
})
export class BigBasketDataService extends ProductsdataService {
  // productList:Array<Product>;

  constructor() { 
    super();
    this.productList = new Array<Product>;
    let p1 = new Product(1, "MotoG4", "Mobiles", 24000, "assets/images/1.jpg");
    let p2 = new Product(2, "SonyDSC", "Camera", 64000, "assets/images/2.jpg");
    let p3 = new Product(3, "Lenovo110", "Laptops", 54000, "assets/images/3.jpg");
    let p4 = new Product(4, "Xiomi55", "Mobile", 14000, "assets/images/4.jpg");
    let p5 = new Product(5, "Samsung Galaxy", "Mobiles", 44000, "assets/images/5.jpg");
    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);
  }

  getProductList():Array<Product>{
    return this.productList;
  }
}
