import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  // providers:[{provide:ProductsdataService,useClass:ProductsdataService}]

  providers:[ProductsdataService]
})
export class ProductlistComponent implements OnInit {
  productList: Array<Product>;
  isAdmin:boolean= true; // ideally will be set by the login Component/ Login Services

  constructor(private pdataservice:ProductsdataService) { 
    //let pdataservice = new ProductsdataService(); // dependency
    this.productList = new Array<Product>;
    
  }

  ngOnInit(): void {
    // invoke services
    this.productList = this.pdataservice.getProductsList(); 
  }

  delete(pid:number) {
    for(var i=0; i<this.productList.length; i++) {
      if(this.productList[i].id == pid)
        this.productList.splice(i,1);
    }
  }

}
