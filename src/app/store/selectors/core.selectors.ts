import {createSelector} from "@ngrx/store";
import {IAppState} from "@core/models";
export const selectCartFeature = (state: IAppState) => state.cart.productsCount;

export const selectNumberOfCartItems = createSelector(
  selectCartFeature,
  (state: number) => state);

