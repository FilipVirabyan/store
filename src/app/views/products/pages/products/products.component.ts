import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {categoriesSelector, filtersSelector, isLoadingSelector, productsSelector} from "@store/selectors";
import {IAppState, IFilter, IProduct} from "@core/models";
import {ProductsPageActions} from "@store/actions";
import {Utils} from "@core/helpers";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements  OnInit{
  prods$:Observable<IProduct[]>;
  isLoading$:Observable<boolean>;
  categories$:Observable<string[]>;
  filters$!:Observable<IFilter|undefined>;

  trackBy = Utils.trackByFn<IProduct>;
  filterOpened:boolean = false;
  constructor(private _store: Store<IAppState & {categories: string[]}>) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector))
    this.prods$ = this._store.pipe(select(productsSelector))
    this.categories$ = this._store.pipe(select(categoriesSelector))
    this.filters$ = this._store.pipe(select(filtersSelector))
  }

  ngOnInit() {
    this._store.dispatch(ProductsPageActions.getProducts())
    this._store.dispatch(ProductsPageActions.getProductsCategories())
  }

  addToCart(product: IProduct){
    this._store.dispatch(ProductsPageActions.addProductToCart({product}));
  }

  filterProducts(filters: IFilter){
    this._store.dispatch(ProductsPageActions.filterProducts({filters}));
  }
}
