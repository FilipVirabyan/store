import {createSelector} from '@ngrx/store';
import {IAppState, ICartProduct, ICartState} from "@core/models";

export const selectCartState = (state: IAppState) => state.cart;

export const selectCartItems = createSelector(
  selectCartState,
  (state: ICartState | undefined) => {
    return state?.products;
  }
);

export const selectCartTotalPrice = createSelector(
  selectCartState,
  (state: ICartState | undefined) => {
    return state?.products.reduce((accumulator: number, cartItem: ICartProduct) => {
      return accumulator + (cartItem.numberOfProducts * +cartItem.product.price);
    }, 0);
  }
);
