import {IProduct} from "@core/models/product.interface";
export interface ICartProduct {
  id:number,
  numberOfProducts: number;
  product: IProduct;
}
