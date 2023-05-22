import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, EMPTY, map, mergeMap, of, switchMap} from "rxjs";
import {ProductsService} from "@core/api-services/products/products.service";
import {ProductsPageActions} from "@store/actions";
import {ReducerMapHelper} from "@core/helpers";
@Injectable()
export class ProductEffects{
  getProducts$ = createEffect(()=>{
     return this._actions$.pipe(
       ofType(ProductsPageActions.getProducts),
       mergeMap(()=>{
         return this._productsService.getProducts()
           .pipe(
             map(
               products=> ProductsPageActions.getProductsSuccess({products})
             ),
             catchError(
               (err: Error) => of(ProductsPageActions.getProductsFailure({error:err.message})
                 )
             )
           )
       })
     )
  })

  getProductsCategories$ = createEffect(()=>{
    return this._actions$.pipe(
      ofType(ProductsPageActions.getProductsCategories),
      mergeMap(()=>{
        return this._productsService.getProductCategories()
          .pipe(
            map(
              categories=> ProductsPageActions.getProductsCategoriesSuccess({categories})
            ),
            catchError(()=> EMPTY)
          )
      })
    )
  })

  filterProducts$ = createEffect(()=>{
    return this._actions$.pipe(
      ofType(ProductsPageActions.filterProducts),
      switchMap(({filters})=>{
        return this._productsService.getProducts()
          .pipe(
            map(
              products=> {
                products = ReducerMapHelper.filterProductsMap(products, filters)
                return ProductsPageActions.getProductsSuccess({products})
              }
            ),
            catchError(
              (err: Error) => of(ProductsPageActions.getProductsFailure({error:err.message})
              )
            )
          )
      })
    )
  })

  constructor(private _actions$: Actions,
              private _productsService:ProductsService) {
  }
}
