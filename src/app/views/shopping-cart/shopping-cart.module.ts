import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ShoppingCartComponent} from "@views/shopping-cart/pages/shopping-cart/shopping-cart.component";
import {ListContainerComponent} from "@shared/components/list-container/list-container.component";
import {ProductCardComponent} from "@shared/components/product-card/product-card.component";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [
    CommonModule,
    ListContainerComponent,
    ProductCardComponent,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    RouterLink,
  ],
  exports:[
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule { }
