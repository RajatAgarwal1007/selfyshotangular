import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
products:Array<Product>;
  constructor(private pdataservice:ProductsdataService) {
    this.products = new Array<Product>;
  }
  
  ngOnInit(): void {
    this.products = this.pdataservice.getProductsList(); 
  }

  setNewPrice(newprice:number, pid:number) { // Later we can refactor and move it to productDataService
    for(var i=0; i<this.products.length; i++) {
      if(this.products[i].id == pid)
        this.products[i].price = newprice; 
    }
  }

}
