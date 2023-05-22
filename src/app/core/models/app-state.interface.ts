import {IProductsState} from "@core/models/products-state.interface";
import {ICartState} from "@core/models/cart-state.interface";
export interface IAppState {
  products: IProductsState;
  cart: ICartState;
}
