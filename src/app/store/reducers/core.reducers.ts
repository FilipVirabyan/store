import { ActionReducerMap } from "@ngrx/store";
import {IAppState} from "@core/models";
import {productsReducer} from "@store/reducers/product.reducers";
import {cartReducer} from "@store/reducers/cart.reducers";

export const coreReducers: ActionReducerMap<IAppState> = {
  products: productsReducer,
  cart: cartReducer
}
