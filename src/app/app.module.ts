import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PriceupdaterComponent } from './priceupdater/priceupdater.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FormsModule } from '@angular/forms';
import { ProductsdataService } from './productsdata.service';
import { BigBasketDataService } from './big-basket-data.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductlistComponent,
    HeaderComponent,
    InventoryComponent,
    MenuComponent,
    PagenotfoundComponent,
    PriceupdaterComponent,
    RegistrationComponent,
    UserdetailsComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [{provide:ProductsdataService, useClass:BigBasketDataService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
