import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {IProduct} from "@core/models";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "@shared/shared.module";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, SharedModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
 @Input() product!:IProduct;
}
