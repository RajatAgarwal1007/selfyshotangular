import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [ // Routing Configuration
{
  path:'', // default route
  // component:LoginComponent
  redirectTo:'login',
  pathMatch:'full'
},
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'product',
    component:ProductlistComponent
  },
  {
    path:'inventory',
    component:InventoryComponent
  },
  {
    path:'users',
    component:UserlistComponent
  },
  { //place it at the end of the routing config
    path:'**',
    component:PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // these are primary roots that's we have forRoot
  exports: [RouterModule]
})
export class AppRoutingModule { }
