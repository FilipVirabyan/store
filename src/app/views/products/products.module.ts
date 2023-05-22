import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProductsComponent} from "@views/products/pages/products/products.component";
import {FilterComponent} from "@views/products/components/filter/filter.component";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {ListContainerComponent} from "@shared/components/list-container/list-container.component";
import {ProductCardComponent} from "@shared/components/product-card/product-card.component";
import {SpinnerComponent} from "@shared/components/spinner/spinner.component";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import {MatChipsModule} from "@angular/material/chips";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    ProductsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatSliderModule,
    MatButtonModule,
    ListContainerComponent,
    ProductCardComponent,
    SpinnerComponent,
    MatIconModule,
    MatRippleModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
