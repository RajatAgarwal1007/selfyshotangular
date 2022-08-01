import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-priceupdater',
  templateUrl: './priceupdater.component.html',
  styleUrls: ['./priceupdater.component.css']
})
export class PriceupdaterComponent implements OnInit {
  @Input()
  priceValue:number=0; // to be set by the parent (InventoryComp)

  //custom event update
  @Output()
  update = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  updatePrice() {
    //emit the custom event to the parent (inventory comp)
    this.update.emit(this.priceValue);
  }

}
