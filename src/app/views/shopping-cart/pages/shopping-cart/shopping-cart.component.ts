import {ChangeDetectionStrategy, Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {IAppState, ICartProduct} from "@core/models";
import {Observable} from "rxjs";
import {selectCartItems, selectCartTotalPrice} from "@store/selectors";
import {CartPageActions} from "@store/actions/cart.actions";
import {Utils} from "@core/helpers";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {
  prods$:Observable<ICartProduct[]|undefined>;
  totalPrice$:Observable<number|undefined>;
  trackBy = Utils.trackByFn<ICartProduct>
  constructor(private _store: Store<IAppState>) {
    this.prods$ = this._store.pipe(select(selectCartItems));
    this.totalPrice$ = this._store.pipe(select(selectCartTotalPrice));
  }

  reduceItem(cartProduct: ICartProduct) {
    this._store.dispatch(CartPageActions.reduceNumberOfItemInCart({cartProduct}))
  }

  removeItem(cartProduct: ICartProduct) {
    this._store.dispatch(CartPageActions.removeItemFromCart({cartProduct}));
  }

  increaseItem(cartProduct: ICartProduct) {
    this._store.dispatch(CartPageActions.increaseNumberOfItemInCart({cartProduct}));
  }

}
