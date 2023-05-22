import {ICartState} from "@core/models/cart-state.interface";
import {createReducer, on} from "@ngrx/store";
import {ProductsPageActions} from "@store/actions";
import {CartPageActions} from "@store/actions/cart.actions";
import {ReducerMapHelper} from "@core/helpers";

export const initialState: ICartState = {
  products: [],
  productsCount: 0
};

export const cartReducer = createReducer(
  initialState,
  on(
    ProductsPageActions.addProductToCart,
    (store: ICartState, result) => ReducerMapHelper.addToCartMap(store, result)
  ),
  on(
    CartPageActions.reduceNumberOfItemInCart,
    (store: ICartState, result) => ReducerMapHelper.reduceNumberOfItemInCartMap(store, result)
  ),
  on(
    CartPageActions.increaseNumberOfItemInCart,
    (store: ICartState, result) => ReducerMapHelper.increaseNumberOfItemInCartMap(store, result)
  ),
  on(
    CartPageActions.removeItemFromCart,
    (store: ICartState, result) => ReducerMapHelper.removeItemFromCartMap(store, result)
  ),
);
