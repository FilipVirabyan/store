import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "@views/products/pages/products/products.component";
import {ShoppingCartComponent} from "@views/shopping-cart/pages/shopping-cart/shopping-cart.component";

const routes: Routes = [
  {
    path:'',
    component: ProductsComponent,
  },
  {
    path:'cart',
    component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
