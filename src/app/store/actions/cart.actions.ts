import {createActionGroup, props} from '@ngrx/store';
import {ICartProduct} from "@core/models";

export const CartPageActions = createActionGroup({
  source: 'Cart/Page',
  events: {
    'Reduce number of item in cart': props<{ cartProduct: ICartProduct }>(),
    'Increase number of item in cart': props<{cartProduct: ICartProduct}>(),
    'Remove item from cart': props<{ cartProduct: ICartProduct }>()
  }
})
