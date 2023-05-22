import {ICartProduct} from "@core/models/cart-product.interface";

export interface ICartState {
  productsCount: number;
  products: ICartProduct[];
}
